import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ViewshopsComponent } from './home/shops/viewshops/viewshops.component';
import { OffersComponent } from './home/offers/offers.component';
import { ProfileComponent } from './home/profile/profile.component';
import { LocationComponent } from './home/location/location.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'viewshops', component: ViewshopsComponent },
  { path: 'offers', component: OffersComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'location', component: LocationComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
