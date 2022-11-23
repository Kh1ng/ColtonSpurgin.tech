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
import { MatSelectModule } from '@angular/material/select';
import { EMPTY } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AngularFullpageModule } from '@fullpage/angular-fullpage';

//github activity
import { Octicons } from '@primer/octicons';
import { mustache } from 'mustache';
import { githubactivityfeed } from 'github-activity-feed';

//components
import { AppComponent } from './app.component';
import { HeaderComponent } from './Pages/header/header.component';
import { BioComponent } from './Pages/bio/bio.component';
import { AirForceComponent } from './Pages/air-force/air-force.component';
import { PageNotFoundComponent } from './Pages/page-not-found/page-not-found.component';
import { GhactivityComponent } from './Pages/ghactivity/ghactivity.component';
import { TerminalComponent } from './Pages/terminal/terminal.component';
import { SocialsComponent } from './Pages/socials/socials/socials.component';
import { HomeLabComponent } from './Pages/home-lab/home-lab.component';
import { JavascriptProjectsComponent } from './Pages/javascript-projects/javascript-projects.component';
import { SinglePageComponent } from './single-page/single-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BioComponent,
    AirForceComponent,
    PageNotFoundComponent,
    GhactivityComponent,
    TerminalComponent,
    SocialsComponent,
    HomeLabComponent,
    JavascriptProjectsComponent,
    SinglePageComponent,
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
    AngularFullpageModule,
    // githubactivityfeed,
    // octicons,
    // mustache
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
