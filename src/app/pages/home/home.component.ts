import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import {FormGroup, FormControl} from '@angular/forms';

import { HomePage } from 'src/app/models/content-page.model';
import { News } from 'src/app/models/news.model';
import { Event } from 'src/app/models/event.model';

import { ContentPageService } from 'src/app/services/content-page.service';
import { NewsService } from 'src/app/services/news.service';
import { EventsService } from 'src/app/services/events.service';
import { MatCalendar, MatCalendarCellCssClasses } from '@angular/material/datepicker';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent implements OnInit {
  linkPrefix: string = 'en';

  page: HomePage;
  events: Event[];
  upcomingEvents: Event[];
  nextEvent: Event;

  selectedDate: Date | null;

  constructor(
    public contentPageService: ContentPageService,
    public newsService: NewsService,
    public eventsService: EventsService,
    private languageService: LanguageService
  ) 
  {
    this.loadPage();
    this.loadEvents();
  }
  
  ngOnInit(): void {    
    this.linkPrefix = this.languageService.currentLanguage;
  }

  @ViewChild(MatCalendar) eventCalendar: MatCalendar<Date>;

  dateClass() {
    return (date): MatCalendarCellCssClasses => {
      var cDate = date.toDate();
      var calenderDate = cDate.getFullYear() + "-" + ((cDate.getMonth()+1) < 10 ? ("0" + (cDate.getMonth()+1)) : (cDate.getMonth()+1)) + "-" + (cDate.getDate() < 10 ? ("0" + cDate.getDate()) : cDate.getDate()) + "T00:00:00.000Z";
      if(this.events?.find(x => x.Date + "" == calenderDate)) {
        return 'event-date';
      }
    };
  }
  
  onSelect(eventDate){
    var cDate = eventDate.toDate();
      var calenderDate = cDate.getFullYear() + "-" + ((cDate.getMonth()+1) < 10 ? ("0" + (cDate.getMonth()+1)) : (cDate.getMonth()+1)) + "-" + (cDate.getDate() < 10 ? ("0" + cDate.getDate()) : cDate.getDate()) + "T00:00:00.000Z";
      var selectedEvents = this.events?.filter(x => x.Date + "" == calenderDate)
      if(selectedEvents.length > 0) {
        this.nextEvent = selectedEvents[0];
      }
    //this.selectedDate = event;
  }  

  loadPage() {
    this.contentPageService.homePage.subscribe((homePage) => {
      if (homePage) {
        this.page = homePage;
      }
    });
  }

  loadEvents() {
    this.eventsService.upcomingEvents.subscribe((events) => {
      if (events) {
        this.upcomingEvents = events;
        this.nextEvent = events[0];
        //this.eventCalendar.updateTodaysDate();
      }
    });
    this.eventsService.events.subscribe((events) => {
      if (events) {
        this.events = events;
        this.eventCalendar.updateTodaysDate();
      }
    });
  }
}
