import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { LoginComponent } from './loginPage/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { YemekComponent } from './yemek/yemek.component';
import { KampanyaComponent } from './kampanya/kampanya.component';
import { ProfilComponent } from './profil/profil.component';
import { SiparisComponent } from './siparis/siparis.component';

const routes: Routes = [
  { path: '', component: RestaurantComponent },
  { path: 'login', component: LoginComponent }
];

const kayit: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: RegistrationFormComponent }
];

const geriLogin: Routes = [
  { path: 'sign-up', component: RegistrationFormComponent },
  { path: 'login', component: LoginComponent }
];

const menu: Routes = [
  { path: '', component: RestaurantComponent },
  { path: 'yemek', component: YemekComponent }
];

const kampanya: Routes = [
  { path: '', component: RestaurantComponent },
  { path: 'kampanyalar', component: KampanyaComponent }
];

const profil: Routes = [
  { path: '', component: RestaurantComponent },
  { path: 'profil', component: ProfilComponent }
];

const siparis: Routes = [
  { path: '', component: RestaurantComponent },
  { path: 'siparis', component: SiparisComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    RouterModule.forRoot(kayit),
    RouterModule.forRoot(geriLogin),
    RouterModule.forRoot(menu),
    RouterModule.forRoot(kampanya),
    RouterModule.forRoot(profil),
    RouterModule.forRoot(siparis),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
