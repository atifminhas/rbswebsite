import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

import { Event } from 'src/app/models/event.model';

import { EventsService } from 'src/app/services/events.service';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss'],
})

export class EventListComponent implements OnInit {
  linkPrefix: string = 'en';

  eventsList: Event[];
  breadcrumb: String[];
  bannerPicture: String;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public eventsService: EventsService,
    private languageService: LanguageService
  ) 
  {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd){
          this.loadEvent();
          this.getBreadcrumb();
      }
    }); 
    
  }
  
  ngOnInit(): void {
    this.linkPrefix = this.languageService.currentLanguage;
  }

  loadEvent() {
    this.eventsService.events.subscribe((events) => {
      if (events) {
        this.eventsList = events;
        this.bannerPicture = events[0]?.Picture;
      }
    });
  }

  getBreadcrumb() {
    var breadcrumb: String[] = [];
    breadcrumb.push("Home");
    breadcrumb.push("Event");
    this.breadcrumb = breadcrumb;
  }
  
}
