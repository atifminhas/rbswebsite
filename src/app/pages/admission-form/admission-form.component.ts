import { Component, Inject, OnInit } from '@angular/core';

import { ContentPageService } from 'src/app/services/content-page.service';
import { LanguageService } from 'src/app/services/language.service';

import {MatDialogModule, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatDialog} from '@angular/material/dialog';
import {FormGroup, FormBuilder, FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Router } from '@angular/router';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'dialog-disclaimer',
  templateUrl: 'dialog-disclaimer.html',
})
export class DialogDisclaimer {
  constructor(@Inject(MAT_DIALOG_DATA) public data: null) {}
}

@Component({
  selector: 'app-admission-form',
  templateUrl: './admission-form.component.html',
  styleUrls: ['./admission-form.component.scss'],
})

export class AdmissionFormComponent implements OnInit {
  linkPrefix:string = 'en';

  breadcrumb: String[];
  bannerPicture: String;

  disclaimerDialog: any;
  isConfirmed: boolean = false;

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private languageService: LanguageService,
    public contentPageService: ContentPageService
  ) 
  {
    this.getBreadcrumb();
  }
  
  ngOnInit(): void {    
    this.linkPrefix = this.languageService.currentLanguage;

    this.openDisclaimer();
  }

  getBreadcrumb() {
    var breadcrumb: String[] = [];
    breadcrumb.push("Home");
    breadcrumb.push("Admission Form");
    this.breadcrumb = breadcrumb;
  }

  openDisclaimer() {
    this.disclaimerDialog = this.dialog.open(DialogDisclaimer, {data: {close: () => {this.confirmDisclaimer()}}});
    this.disclaimerDialog.afterClosed().subscribe(() => {
      if(!this.isConfirmed) {
        this.router.navigate(['application-info']);
        //this.disclaimerDialog = this.dialog.open(DialogDisclaimer, {data: {close: () => {this.confirmDisclaimer()}}});
      }
    });

  }

  confirmDisclaimer() {
    this.isConfirmed = true;
    this.disclaimerDialog.close();
  }

  selectSchoolYear(o) {}
}
