import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppInsightsService } from './app-insights.service'

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SortPipe } from './sort.pipe'; // <-- NgModel lives here
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    SortPipe
  ],
  imports: [
    BrowserModule,FormsModule, AppRoutingModule,BrowserAnimationsModule
  ],
  providers: [AppInsightsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
