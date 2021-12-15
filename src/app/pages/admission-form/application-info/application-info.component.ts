import { Component, Inject, OnInit } from '@angular/core';

import {MatDialogModule, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatDialog} from '@angular/material/dialog';
import {FormGroup, FormBuilder, FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { LanguageService } from 'src/app/services/language.service';
import { AdmissionService } from 'src/app/services/admission.service';
import { Router } from '@angular/router';
import { AdmissionFormLookups, Lookup } from 'src/app/models/lookup.model';
import { AdmissionApplication } from 'src/app/models/admission-application.model';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-admission-form-application-info',
  templateUrl: './application-info.component.html',
  styleUrls: ['./application-info.component.scss'],
})

export class AdmissionFormApplicationInfoComponent implements OnInit {
  linkPrefix:string = 'en';

  breadcrumb: String[];
  bannerPicture: String;

  lookups: AdmissionFormLookups;
  schoolYear: number;
  semester: number;
  isSchoolYearSelected = false;
  whodata: number;

  constructor(
    private languageService: LanguageService,
    public admissionService: AdmissionService,
    private router: Router,   
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

  selectSchoolYear(schoolYear, semester) {
    this.isSchoolYearSelected = true;
    this.schoolYear = schoolYear;
    this.semester = semester;
  }

  btnApplicationInfoNext(){
    var application = {SchoolYearId: this.schoolYear, SemesterId: this.semester, ParentTypeId: this.whodata};
    this.admissionService.setCurrentApplication(application);
    this.router.navigate([this.linkPrefix+ '/admission-form/email-address']);
  }
  
  loadLookups() {
    this.admissionService.lookups.subscribe((lookups) => {
      if (lookups) {
        this.lookups = lookups;
      }
    });
  }

}
