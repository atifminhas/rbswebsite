import { Component, Inject, OnInit } from '@angular/core';

import {MatDialogModule, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatDialog} from '@angular/material/dialog';
import {FormGroup, FormBuilder, FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { LanguageService } from 'src/app/services/language.service';
import { Router } from '@angular/router';
import { AdmissionService } from 'src/app/services/admission.service';
import { AdmissionFormLookups } from 'src/app/models/lookup.model';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-admission-form-father-detail',
  templateUrl: './father-detail.component.html',
  styleUrls: ['./father-detail.component.scss'],
})

export class AdmissionFormFatherDetailComponent implements OnInit {

  lookups: AdmissionFormLookups;
  nationalityCategory: number = null;
  employed: boolean = null;
  
  //model can move later to models  folder
  civilid: string;
  nationalitycategory: number;
  nationality: number;
  maritalstatus: number;
  firstnamear: string;
  secondnamear: string;
  thirdnamear: string;
  fourthnamear: string;
  firstnameen: string;
  secondnameen: string;
  thirdnameen: string;
  fourthnameen: string;
  qualification: number;
  //employed: number;
  jobtitle: number;
  jobsector: number;
  mobilenumber: string;
  homenumber: string;
  emailaddress: string;


  linkPrefix:string = 'en';
  submitted = false;

  breadcrumb: String[];
  bannerPicture: String;

  constructor(
    private router: Router, 
    private languageService: LanguageService,
    public admissionService: AdmissionService
  ) 
  {
    this.loadLookups();
    this.getBreadcrumb();
  }
  
  ngOnInit(): void {    
    this.linkPrefix = this.languageService.currentLanguage;
  }

  getBreadcrumb() {
    var breadcrumb: String[] = [];
    breadcrumb.push("Home");
    breadcrumb.push("Admission Form");
    this.breadcrumb = breadcrumb;
  }

  loadLookups() {
    this.admissionService.lookups.subscribe((lookups) => {
      if (lookups) {
        this.lookups = lookups;
      }
    });
  }

  handelNationalityCategoryChange(value: number) {
    this.nationalityCategory = value;
  }

  handelEmployedChange(value: boolean) {
    this.employed = value;
  }

  btnFatherDetailNext(valid: boolean){
    //console.log(data);
    this.submitted = true;
    if(valid)
      this.router.navigate([this.linkPrefix+ '/admission-form/mother-details']);
  }
}
