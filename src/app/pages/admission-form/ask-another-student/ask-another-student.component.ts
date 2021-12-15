import { Component, Inject, OnInit } from '@angular/core';

import {MatDialogModule, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatDialog} from '@angular/material/dialog';
import {FormGroup, FormBuilder, FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { LanguageService } from 'src/app/services/language.service';
import { ContentPageService } from 'src/app/services/content-page.service';
import { Router } from '@angular/router';

@Component({
  selector: 'admission-form-app-ask-another-student',
  templateUrl: './ask-another-student.component.html',
  styleUrls: ['./ask-another-student.component.scss']
})
export class AdmissionFormAskAnotherStudentComponent implements OnInit {

  linkPrefix:string = 'en';

  breadcrumb: String[];
  bannerPicture: String;

  option: boolean;

  constructor(
    private languageService: LanguageService,
    public contentPageService: ContentPageService,
    private router: Router
  ) { this.getBreadcrumb();}

  ngOnInit(): void {
    this.linkPrefix = this.languageService.currentLanguage;
  }

  getBreadcrumb() {
    var breadcrumb: String[] = [];
    breadcrumb.push("Home");
    breadcrumb.push("Admission Form");
    this.breadcrumb = breadcrumb;
  }

  btnAddStudent(option){
    if(option == true)
      this.router.navigate([this.linkPrefix+ '/admission-form/student-details']);
    else  
    this.router.navigate([this.linkPrefix+ '/admission-form/submit-application']);
  }
}
