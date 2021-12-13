import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

import { Gallery } from 'src/app/models/gallery.model';

import { GalleryService } from 'src/app/services/gallery.service';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-gallery-list',
  templateUrl: './gallery-list.component.html',
  styleUrls: ['./gallery-list.component.scss'],
})

export class GalleryListComponent implements OnInit {
  linkPrefix:string = 'en';

  galleryList: Gallery[];
  breadcrumb: String[];
  bannerPicture: String;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public galleryService: GalleryService,
    private languageService: LanguageService
  ) 
  {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd){
          this.loadGalleries();
          this.getBreadcrumb();
      }
    }); 
    
  }
  
  ngOnInit(): void {
    this.linkPrefix = this.languageService.currentLanguage;
  }

  loadGalleries() {
    this.galleryService.gallery.subscribe((gallery) => {
      if (gallery) {
        this.galleryList = gallery;
        this.bannerPicture = gallery[0]?.Picture;
      }
    });
  }

  getBreadcrumb() {
    var breadcrumb: String[] = [];
    breadcrumb.push("Home");
    breadcrumb.push("Gallery");
    this.breadcrumb = breadcrumb;
  }
  
}