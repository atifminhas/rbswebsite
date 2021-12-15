import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UrlSegment, UrlSegmentGroup, Route } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { PageComponent } from './pages/page/page.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { NewsListComponent } from './pages/news/news-lsit/news-list.component';
import { NewsDetailComponent } from './pages/news/news-detail/news-detail.component';
import { EventListComponent } from './pages/events/event-lsit/event-list.component';
import { EventDetailComponent } from './pages/events/event-detail/event-detail.component';
import { GalleryListComponent } from './pages/gallery/gallery-list/gallery-list.component';
import { GalleryDetailComponent } from './pages/gallery/gallery-detail/gallery-detail.component';
import { CareersComponent } from './pages/careers/careers.component';
import { AdmissionFormComponent } from './pages/admission-form/admission-form.component';
import { AdmissionFormApplicationInfoComponent } from './pages/admission-form/application-info/application-info.component';
import { AdmissionFormEmailAddressComponent } from './pages/admission-form/email-address/email-address.component';
import { AdmissionFormMobileNumberComponent } from './pages/admission-form/mobile-number/mobile-number.component';
import { AdmissionFormFatherDetailComponent } from './pages/admission-form/father-detail/father-detail.component';
import { AdmissionFormMotherDetailsComponent } from './pages/admission-form/mother-details/mother-details.component';
import { AdmissionFormStudentDetailsComponent } from './pages/admission-form/student-details/student-details.component';
import { AdmissionFormAskRelativeComponent } from './pages/admission-form/ask-relative/ask-relative.component';
import { AdmissionFormAskAnotherStudentComponent } from './pages/admission-form/ask-another-student/ask-another-student.component';
import { AdmissionFormSubmitApplicationComponent } from './pages/admission-form/submit-application/submit-application.component';

export function ComplexUrlMatcher(paramName: string, regex: RegExp) {
  return (
      segments: UrlSegment[],
      segmentGroup: UrlSegmentGroup,
      route: Route) => {

      const parts = [regex];
      const posParams: { [key: string]: UrlSegment } = {};
      const consumed: UrlSegment[] = [];

      let currentIndex = 0;

      for (let i = 0; i < parts.length; ++i) {
          if (currentIndex >= segments.length) {
              return null;
          }
          const current = segments[currentIndex];

          const part = parts[i];
          if (!part.test(current.path)) {
              return null;
          }

          posParams[paramName] = current;
          consumed.push(current);
          currentIndex++;
      }

      if (route.pathMatch === 'full' &&
          (segmentGroup.hasChildren() || currentIndex < segments.length)) {
          return null;
      }

      return { consumed, posParams };
  }
}

// const routes: Routes = [
//   {
//     path: '',
//     redirectTo: '/',
//     pathMatch: 'full', 
//   },
//   {
//     path: '',
//     component: HomeComponent,
//   },
//   {
//     path: 'about-us',
//     component: AboutUsComponent,
//   },
//   {
//     path: 'contact-us',
//     component: ContactUsComponent,
//   },
//   {
//     path: 'pages/:pageId/:slug',
//     component: PageComponent,
//   },
//   {
//     path: 'news',
//     component: NewsListComponent,
//   },
//   {
//     path: 'news/:newsId/:slug',
//     component: NewsDetailComponent,
//   },
//   {
//     path: 'events',
//     component: EventListComponent,
//   },
//   {
//     path: 'events/:eventId/:slug',
//     component: EventDetailComponent,
//   },
//   {
//     path: 'gallery',
//     component: GalleryListComponent,
//   },
//   {
//     path: 'gallery/:galleryId/:slug',
//     component: GalleryDetailComponent,
//   },
// ];

const routes: Routes = [
  {
    path: '',
    redirectTo: '/en/home',
    pathMatch: 'full', 
  },
  {
    matcher: ComplexUrlMatcher("language", /[a-z]/),
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      
      {
        path: 'about-us',
        component: AboutUsComponent,
      },
      {
        path: 'contact-us',
        component: ContactUsComponent,
      },
      {
        path: 'careers',
        component: CareersComponent,
      },
      {
        path: 'pages/:pageId/:slug',
        component: PageComponent,
      },
      {
        path: 'news',
        component: NewsListComponent,
      },
      {
        path: 'news/:newsId/:slug',
        component: NewsDetailComponent,
      },
      {
        path: 'events',
        component: EventListComponent,
      },
      {
        path: 'events/:eventId/:slug',
        component: EventDetailComponent,
      },
      {
        path: 'gallery',
        component: GalleryListComponent,
      },
      {
        path: 'gallery/:galleryId/:slug',
        component: GalleryDetailComponent,
      },
      {
        path: 'admission-form',
        component: AdmissionFormComponent,
      },
      {
        path: 'admission-form/application-info',
        component: AdmissionFormApplicationInfoComponent,
      },
      {
        path: 'admission-form/email-address',
        component: AdmissionFormEmailAddressComponent,
      },
      {
        path: 'admission-form/mobile-number',
        component: AdmissionFormMobileNumberComponent,
      },
      {
        path: 'admission-form/father-detail',
        component: AdmissionFormFatherDetailComponent,
      },
      {
        path: 'admission-form/mother-details',
        component: AdmissionFormMotherDetailsComponent,
      },
      {
        path: 'admission-form/ask-relative',
        component: AdmissionFormAskRelativeComponent,
      },
      {
        path: 'admission-form/student-details',
        component: AdmissionFormStudentDetailsComponent,
      },
      {
        path: 'admission-form/ask-another-student',
        component: AdmissionFormAskAnotherStudentComponent,
      },
      {
        path: 'admission-form/submit-application',
        component: AdmissionFormSubmitApplicationComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
