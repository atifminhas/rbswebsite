import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

import { ApiService } from './api.service';
import { ToasterService } from './toaster.service';

import { Gallery } from '../models/gallery.model';
import { Error } from '../models/error.models';
import { Response } from '../models/response.model';

@Injectable({
  providedIn: 'root'
})

export class GalleryService {

  private _gallery = new BehaviorSubject<Gallery[]>(undefined);
  private _events = new BehaviorSubject<Gallery[]>(undefined);
  private _upcomingEvents = new BehaviorSubject<Gallery[]>(undefined);

  constructor(
    private http: ApiService,
    private spinner: NgxSpinnerService,
    private toaster: ToasterService
  ) { 

  }

  public get gallery(): Observable<Gallery[]> {
    return this._gallery.asObservable();
  }

  getGallery() {
    this.spinner.show();
    this.http.getRequest('gallery').subscribe((response: Response) => {
      if (response.Success) {
        this._gallery.next(response.Result);
      }
      this.spinner.hide();
    }, (err: Error) => {
      this.spinner.hide();
      this.toaster.error(err.error.ErrorMessage);
    });
  }
}
