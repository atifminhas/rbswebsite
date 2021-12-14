import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';

import {MatDialogModule, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatDialog} from '@angular/material/dialog';
import {FormGroup, FormBuilder, FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { LanguageService } from 'src/app/services/language.service';
import { ContentPageService } from 'src/app/services/content-page.service';
import { Router } from '@angular/router';

@Component({
  selector: 'admission-form-app-submit-application',
  templateUrl: './submit-application.component.html',
  styleUrls: ['./submit-application.component.scss']
})
export class AdmissionFormSubmitApplicationComponent implements OnInit {

  otherdata: string;
  otherdata2: string;    


  linkPrefix:string = 'en';

  breadcrumb: String[];
  bannerPicture: String;
  
  
  movedFromNext = false;
  applicationSubmitted = false;


  constructor(
    private languageService: LanguageService,
    public contentPageService: ContentPageService,
    private router: Router
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

  btnSubmitApplicationNext(){
    this.movedFromNext = true;
  }
  btnSubmitApplication(){
    this.applicationSubmitted = true;
  }
  okSubmitted(){    
    this.router.navigate([this.linkPrefix+ '/home']);
  }


  //for reason other validation behaviour
  otherSelected(value: boolean){    
    if(!value)  
      this.otherdata = "";    
  }  


  //for know us validation behaviour
  otherSelected2(value: boolean){    
    if(!value)   
      this.otherdata2 = "";    
  }
}
