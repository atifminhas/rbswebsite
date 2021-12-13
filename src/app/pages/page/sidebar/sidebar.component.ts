import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContentPage } from 'src/app/models/content-page.model';
import { ContentPageService } from 'src/app/services/content-page.service';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {
  @Input() nav!: ContentPage[];

  linkPrefix: string = 'en';

  constructor(
    private router: Router,
    public contentPageService: ContentPageService,
    private languageService: LanguageService
  )
  { 
    this.linkPrefix = this.languageService.currentLanguage;
  }

  ngOnInit(): void {
    
  }
}
