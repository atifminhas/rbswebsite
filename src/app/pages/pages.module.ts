import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NumberPickerModule} from 'ng-number-picker';
import { NgMatSearchBarModule } from 'ng-mat-search-bar';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxSpinnerModule } from 'ngx-spinner';
import { TranslateModule } from '@ngx-translate/core';
import { NgxMasonryModule } from 'ngx-masonry';
import { HttpClientModule} from '@angular/common/http';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';

//import { MatNativeDateModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatTabsModule} from '@angular/material/tabs';
import { MatIconModule} from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import { MatCardModule } from '@angular/material/card';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { MatDialogModule } from '@angular/material/dialog';

import { CurencyPipe } from '../pipes/curency/curency.pipe';
import { StripHtmlPipe } from '../pipes/striphtml/striphtml.pipe';
import { CustomDatePipe } from '../pipes/customdate/customdate.pipe';

import { HeaderMenuComponent } from './common/header-menu/header-menu.component';
import { BreadcrumbHeaderComponent } from './common/breadcrumb-header/breadcrumb-header.component';
import { SidebarComponent } from './page/sidebar/sidebar.component';
import { FooterComponent } from './common/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { BannerComponent } from './home/banner/banner.component';
import { PageComponent } from './page/page.component';
import { NewsListComponent } from './news/news-lsit/news-list.component';
import { NewsDetailComponent } from './news/news-detail/news-detail.component';
import { EventListComponent } from './events/event-lsit/event-list.component';
import { EventDetailComponent } from './events/event-detail/event-detail.component';
import { GalleryListComponent } from './gallery/gallery-list/gallery-list.component';
import { GalleryDetailComponent } from './gallery/gallery-detail/gallery-detail.component';
import { CareersComponent } from './careers/careers.component';
import { AdmissionFormComponent } from './admission-form/admission-form.component';
import { MatSelectModule } from '@angular/material/select';
import { AdmissionFormApplicationInfoComponent } from './admission-form/application-info/application-info.component';
import { AdmissionFormEmailAddressComponent } from './admission-form/email-address/email-address.component';
import { AdmissionFormMobileNumberComponent } from './admission-form/mobile-number/mobile-number.component';
import { AdmissionFormFatherDetailComponent } from './admission-form/father-detail/father-detail.component';

@NgModule({
  declarations: [
    HeaderMenuComponent,
    BreadcrumbHeaderComponent,
    SidebarComponent,
    FooterComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    CareersComponent,
    BannerComponent,
    PageComponent,
    NewsListComponent,
    NewsDetailComponent,
    EventListComponent,
    EventDetailComponent,
    GalleryListComponent,
    GalleryDetailComponent,
    AdmissionFormComponent,
    AdmissionFormApplicationInfoComponent,
    AdmissionFormEmailAddressComponent,
    AdmissionFormMobileNumberComponent,
    AdmissionFormFatherDetailComponent,
    CurencyPipe,
    StripHtmlPipe,
    CustomDatePipe],
  imports: [
    CommonModule,
    CarouselModule,
    RouterModule,
    NumberPickerModule,
    NgMatSearchBarModule,
    Ng2SearchPipeModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    NgxMasonryModule,
    NgxGalleryModule,
    TranslateModule,
    //MatNativeDateModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatToolbarModule,
    MatTabsModule,
    MatIconModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatCardModule,
    MatCarouselModule.forRoot()
  ],
  exports: [
    HeaderMenuComponent,
    BannerComponent,
    FooterComponent,
    MatDialogModule
  ]
})
export class PagesModule { }
