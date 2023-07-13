import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { LoginComponent } from './loginPage/login.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { YemekComponent } from './yemek/yemek.component';
import { KampanyaComponent } from './kampanya/kampanya.component';
import { ProfilComponent } from './profil/profil.component';
import { SiparisComponent } from './siparis/siparis.component';


@NgModule({
  declarations: [
    AppComponent,
    RestaurantComponent,
    LoginComponent,
    RegistrationFormComponent,
    YemekComponent,
    KampanyaComponent,
    ProfilComponent,
    SiparisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
