
import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
//import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxSpinnerModule } from 'ngx-spinner';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

//import { MatNativeDateModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatTabsModule} from '@angular/material/tabs';
import { MatIconModule} from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import { MatCardModule } from '@angular/material/card';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule,
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
    MatCarouselModule.forRoot(),
    PagesModule,
    Ng2SearchPipeModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    NgxSpinnerModule,
    ToastrModule.forRoot({
      timeOut: 8000,
      positionClass: 'toast-top-center',
      preventDuplicates: true,
    }),
  ],
  bootstrap: [AppComponent],
  providers: [Title],
})
export class AppModule { }
