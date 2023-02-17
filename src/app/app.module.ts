import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

//ngproj
import { NgProjComponent } from './ngproj/ngproj.component';
import { HomeComponent } from './ngproj/home/home.component';
import { UserComponent } from './ngproj/user/user.component';

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
import { LandingComponent } from './Pages/landing/landing.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

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
    NgProjComponent,
    HomeComponent,
    UserComponent,
    LandingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FontAwesomeModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    MatDividerModule,
    MatSelectModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
