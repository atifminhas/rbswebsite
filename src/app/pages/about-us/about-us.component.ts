import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

import { AboutUsPage } from 'src/app/models/content-page.model';

import { ContentPageService } from 'src/app/services/content-page.service';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})

export class AboutUsComponent implements OnInit {

  page: AboutUsPage;
  breadcrumb: String[];

  constructor(
    private languageService: LanguageService,
    public contentPageService: ContentPageService
  ) 
  {
    this.loadPage();
  }
  
  ngOnInit(): void {    
  }

  loadPage() {
    this.contentPageService.aboutUsPage.subscribe((aboutUsPage) => {
      if (aboutUsPage) {
        this.page = aboutUsPage;
        this.getBreadcrumb();
      }
    });
  }

  getBreadcrumb() {
    var breadcrumb: String[] = [];
    breadcrumb.push(this.languageService.currentLanguage == "ar" ? "الصفحة الرئيسية" : "Home");
    breadcrumb.push(this.page.Title);
    this.breadcrumb = breadcrumb;
  }
}