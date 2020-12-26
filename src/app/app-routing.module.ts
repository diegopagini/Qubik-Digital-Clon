import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { WathWeDoComponent } from './components/wath-we-do/wath-we-do.component';
import { WhoWeAreComponent } from './components/who-we-are/who-we-are.component';
import { OurWorkComponent } from './components/our-work/our-work.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'whatwedo', component: WathWeDoComponent },
  { path: 'whoweare', component: WhoWeAreComponent },
  { path: 'ourwork', component: OurWorkComponent },
  { path: 'contactus', component: ContactUsComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
