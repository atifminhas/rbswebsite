import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

import { News } from 'src/app/models/news.model';
import { LanguageService } from 'src/app/services/language.service';

import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss'],
})

export class NewsListComponent implements OnInit {
  linkPrefix: string = 'en';

  newsList: News[];
  breadcrumb: String[];
  bannerPicture: String;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public newsService: NewsService,
    private languageService: LanguageService
  ) 
  {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd){
          this.loadNews();
          this.getBreadcrumb();
      }
    }); 
    
  }
  
  ngOnInit(): void {
    this.linkPrefix = this.languageService.currentLanguage;
  }

  loadNews() {
    this.newsService.news.subscribe((news) => {
      if (news) {
        this.newsList = news;
        this.bannerPicture = news[0]?.Picture;
      }
    });
  }

  getBreadcrumb() {
    var breadcrumb: String[] = [];
    breadcrumb.push("Home");
    breadcrumb.push("News");
    this.breadcrumb = breadcrumb;
  }
  
}
