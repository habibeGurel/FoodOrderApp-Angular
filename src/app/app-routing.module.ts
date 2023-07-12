import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { LoginComponent } from './loginPage/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { RegistrationFormComponent } from './registration-form/registration-form.component';

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

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    RouterModule.forRoot(kayit),
    RouterModule.forRoot(geriLogin),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
