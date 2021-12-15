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
  selector: 'admission-form-app-relative',
  templateUrl: './relative.component.html',
  styleUrls: ['./relative.component.scss']
})
export class AdmissionFormRelativeComponent implements OnInit {

  linkPrefix:string = 'en';

  breadcrumb: String[];
  bannerPicture: String;

  //model can move later to models  folder
  civilid: string;
  relationshiptype: number;
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
  employed: number;
  jobtitle: number;
  jobsector: number;
  mobilenumber: string;
  homenumber: string;
  emailaddress: string;

  submitted = false;


  constructor(
    private router: Router, 
    private languageService: LanguageService,
    public contentPageService: ContentPageService
  ) {this.getBreadcrumb(); }

  ngOnInit(): void {
    this.linkPrefix = this.languageService.currentLanguage;
  }

  getBreadcrumb() {
    var breadcrumb: String[] = [];
    breadcrumb.push("Home");
    breadcrumb.push("Admission Form");
    this.breadcrumb = breadcrumb;
  }
  
  btnRelativeDetailsNext(valid: boolean){
    this.submitted = true;
    
    if(valid)
      this.router.navigate([this.linkPrefix+ '/admission-form/ask-student']);
  }

}
