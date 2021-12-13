import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Resource } from 'src/app/models/content-page.model';
import { News } from 'src/app/models/news.model';
import { ContentPageService } from 'src/app/services/content-page.service';
import { LanguageService } from 'src/app/services/language.service';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent implements OnInit {
  linkPrefix: string = 'en';

  resources: Resource[];
  latestNews: News[];
  copyrightYear: any = new Date().getFullYear();

  constructor(
    private router: Router,
    private newsService: NewsService,
    private languageService: LanguageService,
    public contentPageService: ContentPageService
  )
  { 
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd){
          this.loadNews();
          this.loadResources();
      }
    }); 
  }

  ngOnInit(): void {
    this.linkPrefix = this.languageService.currentLanguage;
  }

  loadResources() {
    this.contentPageService.resources.subscribe((resources) => {
      if (resources) {
        this.resources = resources;
      }
    });
  }

  loadNews() {
    this.newsService.news.subscribe((allNews) => {
      if (allNews) {
        this.getLatest(allNews);
      }
    });
  }

  getLatest(allNews: News[]) {
    this.latestNews = allNews.slice(0, 3).map(x => {
      return x
    });
  }

  getResource(key): String {
    var result = this.resources?.find(x => x.Key == key);
    
    if(!result)
      return "";

    return result.Value;
  }
}
