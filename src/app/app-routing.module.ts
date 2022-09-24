import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AirForceComponent  } from './air-force/air-force.component';
import { TerminalComponent } from './terminal/terminal.component';
import { HeaderComponent } from './header/header.component';
import { GhactivityComponent } from './ghactivity/ghactivity.component';
import { from } from 'rxjs';


const routes: Routes = [
  { path: 'landing-component', component: LandingComponent },
  { path: '', redirectTo: 'landing-component', pathMatch: 'full' },
  { path: 'AirForce-component', component: AirForceComponent },
  { path: 'GHActivityComponent', component: GhactivityComponent },
  { path: 'term', component: TerminalComponent},
  { path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }