import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { LoginComponent } from './loginPage/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { YemekComponent } from './yemek/yemek.component';
import { KampanyaComponent } from './kampanya/kampanya.component';
import { ProfilComponent } from './profil/profil.component';
import { SiparisComponent } from './siparis/siparis.component';
import { AdminComponent } from './admin/admin.component';
import { AdminYemekComponent } from './admin-yemek/admin-yemek.component';
import { AdminSiparisComponent } from './admin-siparis/admin-siparis.component';
import { CreateComponent } from './admin-yemek/create/create.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { UpdateComponent } from './admin-yemek/update/update.component';

const routes: Routes = [
  { path: '', component: FirstPageComponent },
  { path: 'main', component: RestaurantComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: RegistrationFormComponent },
  { path: 'yemek', component: YemekComponent },
  { path: 'kampanyalar', component: KampanyaComponent },
  { path: 'profil', component: ProfilComponent },
  { path: 'siparis', component: SiparisComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'adminYemek', component: AdminYemekComponent },
  { path: 'adminSiparis', component: AdminSiparisComponent },
  { path: 'cikis', component: FirstPageComponent },
  { path: 'urun-ekle', component: CreateComponent },
  { path: 'update', component: UpdateComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
