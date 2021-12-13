import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

import { ApiService } from './api.service';
import { ToasterService } from './toaster.service';

import { Event } from '../models/event.model';
import { Error } from '../models/error.models';
import { Response } from '../models/response.model';

@Injectable({
  providedIn: 'root'
})

export class EventsService {

  private _events = new BehaviorSubject<Event[]>(undefined);
  private _upcomingEvents = new BehaviorSubject<Event[]>(undefined);

  constructor(
    private http: ApiService,
    private spinner: NgxSpinnerService,
    private toaster: ToasterService
  ) { 

  }

  public get events(): Observable<Event[]> {
    return this._events.asObservable();
  }

  getEvents() {
    this.spinner.show();
    this.http.getRequest('event').subscribe((response: Response) => {
      if (response.Success) {
        this._events.next(response.Result);
      }
      this.spinner.hide();
    }, (err: Error) => {
      this.spinner.hide();
      this.toaster.error(err.error.ErrorMessage);
    });
  }

  public get upcomingEvents(): Observable<Event[]> {
    return this._upcomingEvents.asObservable();
  }

  getUpcomingEvents() {
    this.spinner.show();
    this.http.getRequest('event/upcoming').subscribe((response: Response) => {
      if (response.Success) {
        this._upcomingEvents.next(response.Result);
      }
      this.spinner.hide();
    }, (err: Error) => {
      this.spinner.hide();
      this.toaster.error(err.error.ErrorMessage);
    });
  }
}
