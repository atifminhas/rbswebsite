import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

import { ApiService } from './api.service';
import { ToasterService } from './toaster.service';

import { NavigationMenu, Banner, ContentPage, HomePage, AboutUsPage, Resource, ContactUsPage, CareersPage } from '../models/content-page.model';
import { Error } from '../models/error.models';
import { Response } from '../models/response.model';

@Injectable({
  providedIn: 'root'
})

export class ContentPageService {

  private _resources = new BehaviorSubject<Resource[]>(undefined);
  private _navigationMenuTop = new BehaviorSubject<NavigationMenu[]>(undefined);
  private _navigationMenuBtm = new BehaviorSubject<NavigationMenu[]>(undefined);
  private _banners = new BehaviorSubject<Banner[]>(undefined);
  private _allPages = new BehaviorSubject<ContentPage[]>(undefined);

  private _homePage = new BehaviorSubject<HomePage>(undefined);
  private _aboutUsPage = new BehaviorSubject<AboutUsPage>(undefined);
  private _contactUsPage = new BehaviorSubject<ContactUsPage>(undefined);
  private _careersPage = new BehaviorSubject<ContactUsPage>(undefined);

  constructor(
    private http: ApiService,
    private spinner: NgxSpinnerService,
    private toaster: ToasterService
  ) { 

  }

  public get resources(): Observable<Resource[]> {
    return this._resources;
  }

  public get navigationMenuTop(): Observable<NavigationMenu[]> {
    return this._navigationMenuTop;
  }

  public get navigationMenuBtm(): Observable<NavigationMenu[]> {
    return this._navigationMenuBtm;
  }

  public get allPages(): Observable<ContentPage[]> {
    return this._allPages.asObservable();;
  }

  public get banners(): Observable<Banner[]> {
    return this._banners.asObservable();;
  }

  getResources() {
    this.spinner.show();
    this.http.getRequest('content/resources').subscribe((response: Response) => {
      if (response.Success) {
        this._resources.next(response.Result);
      }
      this.spinner.hide();
    }, (err: Error) => {
      this.spinner.hide();
      this.toaster.error(err.error.ErrorMessage);
    });
  }

  getNavigationMenu() {
    this.spinner.show();
    this.http.getRequest('content/navigationmenu').subscribe((response: Response) => {
      if (response.Success) {
        var result = response.Result as NavigationMenu[];
        this._navigationMenuTop.next(result.filter(x => x.Position == 10));
        this._navigationMenuBtm.next(result.filter(x => x.Position == 20));
        this.parseNavigationMenu(response.Result);
      }
      this.spinner.hide();
    }, (err: Error) => {
      this.spinner.hide();
      this.toaster.error(err.error.ErrorMessage);
    });
  }

  getBanners() {
    this.spinner.show();
    this.http.getRequest('content/banners').subscribe((response: Response) => {
      if (response.Success) {
        this._banners.next(response.Result);
      }
      this.spinner.hide();
    }, (err: Error) => {
      this.spinner.hide();
      this.toaster.error(err.error.ErrorMessage);
    });
  }

  parseNavigationMenu(menu: NavigationMenu[]) {
    var allPages: ContentPage[] = [];
    menu.forEach(function(page: NavigationMenu) {
      var contentPage = new ContentPage(
        page.Id,
        0,
        page.Position,
        page.TypeId,
        page.Slug,
        page.MenuTitle,
        page.Title,
        page.Content,
        page.Picture
      );

      allPages.push(contentPage);
      
      page.SubMenu.forEach(function(page1: NavigationMenu) {
        contentPage = new ContentPage(
          page1.Id,
          page.Id,
          page1.Position,
          page1.TypeId,
          page1.Slug,
          page1.MenuTitle,
          page1.Title,
          page1.Content,
          page1.Picture
        );
  
        allPages.push(contentPage);
  
        page1.SubMenu.forEach(function(page2: NavigationMenu) {
          contentPage = new ContentPage(
            page2.Id,
            page1.Id,
            page2.Position,
            page2.TypeId,
            page2.Slug,
            page2.MenuTitle,
            page2.Title,
            page2.Content,
            page2.Picture
          );
    
          allPages.push(contentPage);
    
        });
        
      });
      
    });
    this._allPages.next(allPages);
  }

  getContentPage(pageId, slug) {
    var page = this._allPages.value.find(x => x.Id == pageId && x.Slug == slug);
    return page;
  }

  public get homePage(): Observable<HomePage> {
    return this._homePage;
  }

  getHomePage() {
    this.spinner.show();
    this.http.getRequest('content/homepage').subscribe((response: Response) => {
      if (response.Success) {
        this._homePage.next(response.Result);
      }
      this.spinner.hide();
    }, (err: Error) => {
      this.spinner.hide();
      this.toaster.error(err.error.ErrorMessage);
    });
  }

  public get aboutUsPage(): Observable<AboutUsPage> {
    return this._aboutUsPage;
  }

  getAboutUsPage() {
    this.spinner.show();
    this.http.getRequest('content/aboutus').subscribe((response: Response) => {
      if (response.Success) {
        this._aboutUsPage.next(response.Result);
      }
      this.spinner.hide();
    }, (err: Error) => {
      this.spinner.hide();
      this.toaster.error(err.error.ErrorMessage);
    });
  }

  public get contactUsPage(): Observable<ContactUsPage> {
    return this._contactUsPage;
  }

  getContactUsPage() {
    this.spinner.show();
    this.http.getRequest('content/contactus').subscribe((response: Response) => {
      if (response.Success) {
        this._contactUsPage.next(response.Result);
      }
      this.spinner.hide();
    }, (err: Error) => {
      this.spinner.hide();
      this.toaster.error(err.error.ErrorMessage);
    });
  }

  public get careersPage(): Observable<CareersPage> {
    return this._careersPage;
  }

  getCareersPage() {
    this.spinner.show();
    this.http.getRequest('content/careers').subscribe((response: Response) => {
      if (response.Success) {
        this._careersPage.next(response.Result);
      }
      this.spinner.hide();
    }, (err: Error) => {
      this.spinner.hide();
      this.toaster.error(err.error.ErrorMessage);
    });
  }
}
