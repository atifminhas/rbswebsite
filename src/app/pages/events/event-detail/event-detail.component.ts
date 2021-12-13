import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

import { Event } from 'src/app/models/event.model';

import { EventsService } from 'src/app/services/events.service';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss'],
})

export class EventDetailComponent implements OnInit {
  linkPrefix: string = 'en';

  event: Event;
  sideNav: Event[];
  breadcrumb: String[];
  eventId: Number;
  slug: String;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public eventsService: EventsService,
    private languageService: LanguageService
  ) 
  {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd){
          this.loadEvent()
      }
    }); 
    
  }
  
  ngOnInit(): void {
    this.linkPrefix = this.languageService.currentLanguage;
  }

  loadEvent() {
    this.eventId = parseInt(this.route.snapshot.paramMap.get('eventId'));
    this.slug = this.route.snapshot.paramMap.get("slug");

    this.eventsService.events.subscribe((allEvents) => {
      if (allEvents) {
        this.event = allEvents.find(x => x.Id == this.eventId);
        this.getSideNav();
        this.getBreadcrumb();
        if(!this.event) {
          //navigate to event not found
        }
      }
    });
  }

  getSideNav() {
    this.eventsService.upcomingEvents.subscribe((allEvents) => {
      if (allEvents) {
        this.sideNav = allEvents;
        if(!this.event) {
          //navigate to event not found
        }
      }
    });
  }

  getBreadcrumb() {
    var breadcrumb: String[] = [];
    breadcrumb.push("Home");
    breadcrumb.push("Events");
    this.breadcrumb = breadcrumb;
  }
  
}
