import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './feature/home/home.component';
import { SliderComponent } from './component/slider/slider.component';
import { CardComponent } from './component/card/card.component';
import { ListHorizontalComponent } from './component/list-horizontal/list-horizontal.component';
import { ItemDetailsComponent } from './feature/item-details/item-details.component';
import { DetailHeaderComponent } from './feature/item-details/detail-header/detail-header.component';
import { NewsComponent } from './feature/item-details/news/news.component';
import { FaqComponent } from './feature/item-details/faq/faq.component';
import { TeamComponent } from './feature/item-details/team/team.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SliderComponent,
    CardComponent,
    ListHorizontalComponent,
    ItemDetailsComponent,
    DetailHeaderComponent,
    NewsComponent,
    FaqComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
