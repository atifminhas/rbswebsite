import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

import { News } from 'src/app/models/news.model';
import { LanguageService } from 'src/app/services/language.service';

import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss'],
})

export class NewsDetailComponent implements OnInit {
  linkPrefix: string = 'en';

  news: News;
  sideNav: News[];
  breadcrumb: String[];
  newsId: Number;
  slug: String;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public newsService: NewsService,
    private languageService: LanguageService
  ) 
  {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd){
          this.loadNews()
      }
    }); 
  }
  
  ngOnInit(): void {
    this.linkPrefix = this.languageService.currentLanguage;
  }

  loadNews() {
    this.newsId = parseInt(this.route.snapshot.paramMap.get('newsId'));
    this.slug = this.route.snapshot.paramMap.get("slug");

    this.newsService.news.subscribe((allNews) => {
      if (allNews) {
        this.news = allNews.find(x => x.Id == this.newsId);
        this.getSideNav(allNews);
        this.getBreadcrumb();
        if(!this.news) {
          //navigate to news not found
        }
      }
    });
  }

  getSideNav(allNews: News[]) {
    this.sideNav = allNews.filter(x => x.Id != this.newsId).slice(0, 10).map(x => {
      return x
    });
  }

  getBreadcrumb() {
    var breadcrumb: String[] = [];
    breadcrumb.push("Home");
    breadcrumb.push("News");
    this.breadcrumb = breadcrumb;
  }
  
}
