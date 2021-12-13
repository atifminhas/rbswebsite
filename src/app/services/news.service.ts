import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

import { ApiService } from './api.service';
import { ToasterService } from './toaster.service';

import { News } from '../models/news.model';
import { Error } from '../models/error.models';
import { Response } from '../models/response.model';

@Injectable({
  providedIn: 'root'
})

export class NewsService {

  private _news = new BehaviorSubject<News[]>(undefined);
  private _events = new BehaviorSubject<News[]>(undefined);
  private _upcomingEvents = new BehaviorSubject<News[]>(undefined);

  constructor(
    private http: ApiService,
    private spinner: NgxSpinnerService,
    private toaster: ToasterService
  ) { 

  }

  public get news(): Observable<News[]> {
    return this._news.asObservable();
  }

  getNews() {
    this.spinner.show();
    this.http.getRequest('news').subscribe((response: Response) => {
      if (response.Success) {
        this._news.next(response.Result);
      }
      this.spinner.hide();
    }, (err: Error) => {
      this.spinner.hide();
      this.toaster.error(err.error.ErrorMessage);
    });
  }
}
