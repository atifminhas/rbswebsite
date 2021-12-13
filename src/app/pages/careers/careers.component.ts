import { Component, OnInit } from '@angular/core';
import { CareersPage, Resource } from 'src/app/models/content-page.model';

import { ContentPageService } from 'src/app/services/content-page.service';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss'],
})

export class CareersComponent implements OnInit {

  page: CareersPage;
  breadcrumb: String[];
  bannerPicture: String;
  resources: Resource[];

  constructor(
    private languageService: LanguageService,
    public contentPageService: ContentPageService
  ) 
  {
    this.loadPage();
    this.loadResources();
  }
  
  ngOnInit(): void {    
  }

  loadPage() {
    this.contentPageService.careersPage.subscribe((careersPage) => {
      if (careersPage) {
        this.page = careersPage;
        this.getBreadcrumb();
        this.bannerPicture = this.page?.Picture;
      }
    });
  }

  getBreadcrumb() {
    var breadcrumb: String[] = [];
    breadcrumb.push(this.languageService.currentLanguage == "ar" ? "الصفحة الرئيسية" : "Home");
    breadcrumb.push(this.page.Title);
    this.breadcrumb = breadcrumb;
  }

  loadResources() {
    this.contentPageService.resources.subscribe((resources) => {
      if (resources) {
        this.resources = resources;
      }
    });
  }

  getResource(key): String {
    var result = this.resources?.find(x => x.Key == key);
    
    if(!result)
      return "";

    return result.Value;
  }
}
