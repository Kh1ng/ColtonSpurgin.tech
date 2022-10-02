import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AirForceComponent  } from './air-force/air-force.component';
import { TerminalComponent } from './terminal/terminal.component';
import { HeaderComponent } from './header/header.component';
import { GhactivityComponent } from './ghactivity/ghactivity.component';
import { HomeLabComponent } from './home-lab/home-lab.component';
import { SocialsComponent } from './socials/socials/socials.component';
// import { from } from 'rxjs';

const routes: Routes = [
  { path: 'landing-component', component: LandingComponent },
  { path: '', redirectTo: 'landing-component', pathMatch: 'full' },
  { path: 'AirForce-component', component: AirForceComponent },
  { path: 'GHActivityComponent', component: GhactivityComponent },
  { path: 'socials', component: SocialsComponent},
  { path: 'term', component: TerminalComponent},
  { path: 'HomeLab', component: HomeLabComponent},
  { path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }