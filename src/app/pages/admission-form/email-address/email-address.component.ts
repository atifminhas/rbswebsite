import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {MatDialogModule, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatDialog} from '@angular/material/dialog';
import {FormGroup, FormBuilder, FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';

import {ErrorStateMatcher} from '@angular/material/core';
import { LanguageService } from 'src/app/services/language.service';
import { AdmissionService } from 'src/app/services/admission.service';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-admission-form-email-address',
  templateUrl: './email-address.component.html',
  styleUrls: ['./email-address.component.scss'],
})

export class AdmissionFormEmailAddressComponent implements OnInit {
  //LANGUAGE
  linkPrefix:string = 'en';

  // PAGE DAT
  breadcrumb: String[];
  bannerPicture: String;

  // FORM
  email: string;
  verficationCode: string;

  // MESSAGES/OTHERS
  errorMessage: string = "";
  isValidEmail = false;

  constructor(
    private languageService: LanguageService,
    public admissionService: AdmissionService,
    private router: Router,   
  ) 
  {
    this.getBreadcrumb();
  }
  
  ngOnInit(): void {    
    this.linkPrefix = this.languageService.currentLanguage;
    this.verifiApplication();
  }

  getBreadcrumb() {
    var breadcrumb: String[] = [];
    breadcrumb.push("Home");
    breadcrumb.push("Admission Form");
    this.breadcrumb = breadcrumb;
  }

  // btnEmailVerify() {   
  //   this.router.navigate([this.linkPrefix+ '/admission-form/mobile-number']);
  // }

  validateEmail(){
    this.errorMessage;
    this.admissionService.validateEmail(this.email, response => {
      if (response.Success) {
        this.isValidEmail = true;
      }
      else {
        this.errorMessage = response.ErrorMessage;
      }
    });
    //console.log(this.email);
  }

  verifyEmail(){
    this.errorMessage;
    this.admissionService.validateEmail(this.email, response => {
      if (response.Success) {
        this.isValidEmail = true;
      }
      else {
        this.errorMessage = response.ErrorMessage;
      }
    });
    //console.log(this.email);
  }

  verifiApplication() {
    var application = this.admissionService.getCurrentApplication();
    if(application == null || application.SemesterId == 0 || application.ParentTypeId == 0)
      this.router.navigate([this.linkPrefix+ '/admission-form/application-info']);
  }
}
