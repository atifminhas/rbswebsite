import { Component, OnInit } from '@angular/core';
import { MatCarousel, MatCarouselComponent, MatCarouselSlide, MatCarouselSlideComponent } from '@ngmodule/material-carousel';

import { Banner } from 'src/app/models/content-page.model';

import { ContentPageService } from 'src/app/services/content-page.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})

export class BannerComponent implements OnInit {

  banners: Banner[];

  constructor(
    public contentPageService: ContentPageService
  )
  { 
    this.loadBanners();
  }

  ngOnInit(): void {

  }

  loadBanners() {
    this.contentPageService.banners.subscribe((banners) => {
      if (banners) {
        this.banners = banners;
      }
    });
  }
}
