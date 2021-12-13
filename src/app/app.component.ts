import { Component, OnInit } from '@angular/core'; 
import { Router, ActivatedRoute, RoutesRecognized } from '@angular/router';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

import { ContentPageService } from 'src/app/services/content-page.service';
import { NewsService } from 'src/app/services/news.service';
import { EventsService } from 'src/app/services/events.service';
import { GalleryService } from 'src/app/services/gallery.service';
import { LanguageService } from './services/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  currentLang:string = 'en';

  constructor(
    public router: Router,
    private activatedRoute: ActivatedRoute,
    private languageService: LanguageService,
    public contentPageService: ContentPageService,
    public newsService: NewsService,
    public eventsService: EventsService,
    public galleryService: GalleryService,
    private translate: TranslateService
  ) 
  {
    this.currentLang = localStorage.getItem('app_lang') ? localStorage.getItem('app_lang') : 'en';
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {});
    this.translate.use(this.currentLang);
  }

  ngOnInit(): void {
    this.router.events.subscribe(val => {
      if (val instanceof RoutesRecognized) {
        // LANGUAGE
        let newLanguage = val.state.root.firstChild.params.language;
        if(newLanguage != "en" && newLanguage != "ar"){
          newLanguage = "en";
          this.languageService.setLanguage(newLanguage)
          location.href = "/" + newLanguage;
        }
          
        if (newLanguage) {
          //let oldLanguage = this.languageService.currentLanguage;
          this.languageService.setLanguage(newLanguage)
          // if(oldLanguage != newLanguage) {
          //   location.reload();
          // }
          this.translate.use(newLanguage);
          this.loadPrimaryData();
        }
      }
    });

    this.loadPrimaryData();
  }

  loadPrimaryData() {
    this.contentPageService.getResources();
    this.contentPageService.getNavigationMenu();
    this.contentPageService.getBanners();
    this.contentPageService.getHomePage();
    this.contentPageService.getAboutUsPage();
    this.contentPageService.getContactUsPage();
    this.contentPageService.getCareersPage();
    this.newsService.getNews();
    this.eventsService.getUpcomingEvents();
    this.eventsService.getEvents();
    this.galleryService.getGallery();
  }
}
