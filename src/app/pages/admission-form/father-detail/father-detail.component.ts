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
  selector: 'app-admission-form-father-detail',
  templateUrl: './father-detail.component.html',
  styleUrls: ['./father-detail.component.scss'],
})

export class AdmissionFormFatherDetailComponent implements OnInit {
  linkPrefix:string = 'en';

  breadcrumb: String[];
  bannerPicture: String;

  constructor(
    private router: Router, 
    private languageService: LanguageService,
    public contentPageService: ContentPageService
  ) 
  {
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

  btnFatherDetailNext(){
    this.router.navigate([this.linkPrefix+ '/admission-form/mother-details']);
  }
}
