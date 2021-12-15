import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

import { ApiService } from './erpapi.service';
import { ToasterService } from './toaster.service';

import { AdmissionFormLookups, Lookup } from '../models/lookup.model';
import { AdmissionApplication, Parent, Student } from '../models/admission-application.model';
import { Error } from '../models/error.models';
import { Response } from '../models/response.model';

@Injectable({
  providedIn: 'root'
})

export class AdmissionService {

  private _lookups = new BehaviorSubject<AdmissionFormLookups>(undefined);

  constructor(
    private http: ApiService,
    private spinner: NgxSpinnerService,
    private toaster: ToasterService
  ) { 

  }

  public get lookups(): Observable<AdmissionFormLookups> {
    return this._lookups.asObservable();
  }

  getLookups() {
    this.spinner.show();
    this.http.getRequest('lookups').subscribe((response: Response) => {
      if (response.Success) {
        this._lookups.next(response.Result);
      }
      this.spinner.hide();
    }, (err: Error) => {
      this.spinner.hide();
      this.toaster.error(err.error.ErrorMessage);
    });
  }

  getCurrentApplication() {
      var app = localStorage.getItem("adm_app");
      if(app)
        return JSON.parse(app) as AdmissionApplication;
      else
        return null;
  }

  setCurrentApplication(application) {
      localStorage.setItem('adm_app', JSON.stringify(application));
  }
}
