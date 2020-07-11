import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './material';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { SlidersComponent } from './home/sliders/sliders.component';
import { ShopsComponent } from './home/shops/shops.component';
import { BottomnavigationComponent } from './home/bottomnavigation/bottomnavigation.component';
import { ViewshopsComponent } from './home/shops/viewshops/viewshops.component';
import { OffersComponent } from './home/offers/offers.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './home/profile/profile.component';
import { LocationComponent } from './home/location/location.component';
import { FilterPipe } from './home/location/fliter';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    HeaderComponent,
    SlidersComponent,
    ShopsComponent,
    BottomnavigationComponent,
    ViewshopsComponent,
    OffersComponent,
    ProfileComponent,
    FilterPipe,

    LocationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DemoMaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,

    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
