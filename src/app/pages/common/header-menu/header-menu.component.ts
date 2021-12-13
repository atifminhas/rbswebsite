import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Resource } from 'src/app/models/content-page.model';
import { ContentPageService } from 'src/app/services/content-page.service';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss']
})

export class HeaderMenuComponent implements OnInit {
  
  linkPrefix: string = 'en';
  resources: Resource[];

  constructor(
    private router: Router,
    public contentPageService: ContentPageService,
    private languageService: LanguageService
  )
  { 
    this.loadResources();
  }

  ngOnInit(): void {
    this.linkPrefix = this.languageService.currentLanguage;
  }

  changeLang(){
    let oldLanguage = this.languageService.currentLanguage;
    let newLanguage = (!oldLanguage || oldLanguage == 'en') ? 'ar' : 'en';
    this.languageService.setLanguage(newLanguage);
    
    let currentRoute = this.router.url.replace("/" + oldLanguage + "/", "/" + newLanguage + "/");

    location.href = currentRoute;
    //this.router.navigate([currentRoute]);
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
