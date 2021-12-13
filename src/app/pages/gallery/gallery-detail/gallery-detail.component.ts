import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

import {NgxGalleryOptions} from '@kolkov/ngx-gallery';
import {NgxGalleryImage} from '@kolkov/ngx-gallery';
import {NgxGalleryAnimation} from '@kolkov/ngx-gallery';

import { Gallery } from 'src/app/models/gallery.model';

import { GalleryService } from 'src/app/services/gallery.service';

@Component({
  selector: 'app-gallery-detail',
  templateUrl: './gallery-detail.component.html',
  styleUrls: ['./gallery-detail.component.scss'],
})

export class GalleryDetailComponent implements OnInit {

  gallery: Gallery;
  sideNav: Gallery[];
  breadcrumb: String[];
  galleryId: Number;
  slug: String;

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public galleryService: GalleryService
  ) 
  {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd){
          this.loadGallery()
      }
    }); 
  }
  
  ngOnInit(): void {
    this.galleryOptions = [
      {
        width: '600px',
        height: '400px',
        thumbnailsColumns: 8,
        imageAnimation: NgxGalleryAnimation.Slide,
        preview: false
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];

    this.galleryImages = [];

  }

  loadGallery() {
    this.galleryId = parseInt(this.route.snapshot.paramMap.get('galleryId'));
    this.slug = this.route.snapshot.paramMap.get("slug");

    this.galleryService.gallery.subscribe((allGallery) => {
      if (allGallery) {
        this.gallery = allGallery.find(x => x.Id == this.galleryId);
        var pictures = this.gallery.GalleryPictures;
        pictures.forEach(picture => {
          this.galleryImages?.push({
            small: picture.Picture,
            medium: picture.Picture,
            big: picture.Picture
          });
        });
        console.log(JSON.stringify(this.galleryImages));
        if(!this.gallery) {
          //navigate to gallery not found
        }
      }
    });
  }
  
}
