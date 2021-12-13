import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

import { ContentPage } from 'src/app/models/content-page.model';

import { ContentPageService } from 'src/app/services/content-page.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
})

export class PageComponent implements OnInit {

  page: ContentPage;
  sideNav: ContentPage[];
  breadcrumb: String[];
  pageId: Number;
  slug: String;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public contentPageService: ContentPageService
  ) 
  {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd){
          this.loadPage()
      }
    }); 
    
  }
  
  ngOnInit(): void {
  }

  loadPage() {
    this.pageId = parseInt(this.route.snapshot.paramMap.get('pageId'));
    this.slug = this.route.snapshot.paramMap.get("slug");

    this.contentPageService.allPages.subscribe((allPages) => {
      if (allPages) {
        this.page = allPages.find(x => x.Id == this.pageId);
        this.getSideNav(allPages);
        this.getBreadcrumb(allPages, this.page);
        if(!this.page) {
          //navigate to page not found
        }
      }
    });
  }

  getSideNav(allPages: ContentPage[]) {
    this.sideNav = allPages.filter(x => x.ParentId == this.page.ParentId);
  }

  getBreadcrumb(allPages: ContentPage[], childPage: ContentPage) {
    var breadcrumb: String[] = [];
    breadcrumb.push(childPage.Title);
    var parentId = childPage.ParentId;
    childPage = allPages.find(x => x.Id == parentId);
    if(childPage) {
      breadcrumb.push(childPage.Title);
      parentId = childPage.ParentId;
      childPage = allPages.find(x => x.Id == parentId);
      if(childPage) {
        breadcrumb.push(childPage.Title);
      }
    }

    this.breadcrumb = breadcrumb.slice().reverse();
  }
  
}
