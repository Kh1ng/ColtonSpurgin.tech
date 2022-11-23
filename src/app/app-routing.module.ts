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
import { SinglePageComponent } from './single-page/single-page.component';
// import { from } from 'rxjs';

const routes: Routes = [
  { path: 'bio', component: BioComponent },
  { path: '', redirectTo: 'AltLanding', pathMatch: 'full' },
  { path: 'AirForce', component: AirForceComponent },
  { path: 'GHActivityComponent', component: GhactivityComponent },
  { path: 'socials', component: SocialsComponent },
  { path: 'term', component: TerminalComponent },
  { path: 'HomeLab', component: HomeLabComponent },
  { path: 'JavascriptProjects', component: JavascriptProjectsComponent },
  { path: 'AltLanding', component: SinglePageComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
