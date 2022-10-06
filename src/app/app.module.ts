import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select'

//github activity
import { Octicons } from '@primer/octicons';
import { mustache } from 'mustache';
import { githubactivity } from 'github-activity-feed';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LandingComponent } from './landing/landing.component';
import { AirForceComponent } from './air-force/air-force.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GhactivityComponent } from './ghactivity/ghactivity.component';
import { TerminalComponent } from './terminal/terminal.component';
import { SocialsComponent } from './socials/socials/socials.component';
import { HomeLabComponent } from './home-lab/home-lab.component';
import { JavascriptProjectsComponent } from './javascript-projects/javascript-projects.component';

//GH activity
// import * as ghactivity from 'github-activity-feed';
// import * as octicons from 'octicons';
// import * as mustache from 'mustache';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingComponent,
    AirForceComponent,
    PageNotFoundComponent,
    GhactivityComponent,
    TerminalComponent,
    SocialsComponent,
    HomeLabComponent,
    JavascriptProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    MatDividerModule,
    MatSelectModule

    // githubhactivity,
    // octicons,
    // mustache
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
