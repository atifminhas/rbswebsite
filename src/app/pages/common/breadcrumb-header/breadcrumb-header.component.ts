import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContentPageService } from 'src/app/services/content-page.service';

@Component({
  selector: 'app-breadcrumb-header',
  templateUrl: './breadcrumb-header.component.html',
  styleUrls: ['./breadcrumb-header.component.scss']
})

export class BreadcrumbHeaderComponent implements OnInit {
  
  @Input() breadcrumb: String[] = [''];
  @Input() background: String = '';

  constructor(
    private router: Router,
    public contentPageService: ContentPageService
  )
  { 
    
  }

  ngOnInit(): void {
    
  }
}
