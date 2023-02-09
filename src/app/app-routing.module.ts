import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BioComponent } from './Pages/bio/bio.component';
import { PageNotFoundComponent } from './Pages/page-not-found/page-not-found.component';
import { AirForceComponent } from './Pages/air-force/air-force.component';
import { TerminalComponent } from './Pages/terminal/terminal.component';
import { HeaderComponent } from './Pages/header/header.component';
import { GhactivityComponent } from './Pages/ghactivity/ghactivity.component';
import { HomeLabComponent } from './Pages/home-lab/home-lab.component';
import { SocialsComponent } from './Pages/socials/socials/socials.component';
import { JavascriptProjectsComponent } from './Pages/javascript-projects/javascript-projects.component';
import { LandingComponent } from './Pages/landing/landing.component';

//NgProject
import { HomeComponent } from './ngproj/home/home.component';
import { UserComponent } from './ngproj/user/user.component';
import { NgProjComponent } from './ngproj/ngproj.component';

const routes: Routes = [
  { path: 'landing', component: LandingComponent },
  { path: 'bio', component: BioComponent },
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  {
    path: 'ngproj',
    component: NgProjComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'user/:id', component: UserComponent },
    ],
  },
  { path: 'AirForce', component: AirForceComponent },
  { path: 'GHActivityComponent', component: GhactivityComponent },
  { path: 'socials', component: SocialsComponent },
  { path: 'term', component: TerminalComponent },
  { path: 'HomeLab', component: HomeLabComponent },
  { path: 'JavascriptProjects', component: JavascriptProjectsComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
