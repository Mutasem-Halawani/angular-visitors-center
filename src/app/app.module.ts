import { DataService } from './services/data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { AlertModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { EventsCarouselComponent } from './events-carousel/events-carousel.component';
import { QuestionsTabsComponent } from './questions-tabs/questions-tabs.component';
import { QuestionsCarouselComponent } from './questions-carousel/questions-carousel.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { RoomRentingComponent } from './room-renting/room-renting.component';
import { MobileOnlyContentComponent } from './mobile-only-content/mobile-only-content.component';
import { MobileMenuComponent } from './mobile-menu/mobile-menu.component';

// import { OwlModule } from 'ngx-owl-carousel';

import { WindowResizeService } from './services/window-resize.service'

// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './carousel/carousel.component';

// import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ApiService }  from './services/api.service';

import { HttpClient } from '@angular/common/http';

// import { ScrollSpyModule } from 'ngx-scrollspy';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    EventsCarouselComponent,
    QuestionsTabsComponent,
    QuestionsCarouselComponent,
    AppFooterComponent,
    RoomRentingComponent,
    MobileOnlyContentComponent,
    MobileMenuComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    // AlertModule.forRoot(),
    // NgbModule.forRoot(),
    // ScrollSpyModule.forRoot(),
    // OwlModule,
    // HttpClientInMemoryWebApiModule.forRoot(
    //   ApiService, { dataEncapsulation: false }
    // )
  ],
  providers: [
    WindowResizeService,
    DataService,
    ApiService,
    HttpClient,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
