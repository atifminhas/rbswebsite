import { Component, Inject, OnInit } from '@angular/core';

import {MatDialogModule, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatDialog} from '@angular/material/dialog';
import {FormGroup, FormBuilder, FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { LanguageService } from 'src/app/services/language.service';
import { ContentPageService } from 'src/app/services/content-page.service';
import { Router } from '@angular/router';


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'admission-form-app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class AdmissionFormStudentDetailsComponent implements OnInit {

  linkPrefix:string = 'en';

  breadcrumb: String[];
  bannerPicture: String;

  //model can move later to models  folder
  civilid: string;
  civilidserialnumber: string;
  nationalitycategory: number;
  nationality: number;
  firstnamear: string;
  secondnamear: string;
  thirdnamear: string;
  fourthnamear: string;
  firstnameen: string;
  secondnameen: string;
  thirdnameen: string;
  fourthnameen: string;
  gender: number;
  religion: number;
  passportnumber: string;
  civilidexpirydate: Date;
  dateofbirth: Date;
  birthcertificatenumber: number;
  birthcertificateissuedate: Date;
  countryofbirth: number;
  birthcertificateissuecountry: number;
  gradeappliedfor: number;

  area: number;
  block: string;
  street: string;
  avenue: string;
  housenumber: string;

  healthstatus: boolean;
  healthstatusdetails: string;
  
  submitted = false;

  constructor(
    private router: Router, 
    private languageService: LanguageService,
    public contentPageService: ContentPageService
  ) { this.getBreadcrumb(); }

  ngOnInit(): void {
  }
  getBreadcrumb() {
    var breadcrumb: String[] = [];
    breadcrumb.push("Home");
    breadcrumb.push("Admission Form");
    this.breadcrumb = breadcrumb;
  }
  btnStudentDetailsNext(valid: boolean){
    this.submitted = true;
    
    if(valid)
      this.router.navigate([this.linkPrefix+ '/admission-form/ask-another-student']);
  }
}
