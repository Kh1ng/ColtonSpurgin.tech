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
import { EMPTY } from 'rxjs'
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

//github activity
import { Octicons } from '@primer/octicons';
import { mustache } from 'mustache';
import { githubactivityfeed } from 'github-activity-feed';

//components
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
import { AltLandingComponent } from './alt-landing/alt-landing.component';



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
    JavascriptProjectsComponent,
    AltLandingComponent
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
    MatSelectModule,
    HttpClientModule,
    FormsModule,
    // githubactivityfeed,
    // octicons,
    // mustache
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
