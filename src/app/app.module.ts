import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { LoginComponent } from './loginPage/login.component';
import { YemekComponent } from './yemek/yemek.component';
import { KampanyaComponent } from './kampanya/kampanya.component';
import { ProfilComponent } from './profil/profil.component';
import { SiparisComponent } from './siparis/siparis.component';
import { AdminComponent } from './admin/admin.component';
import { AdminSiparisComponent } from './admin-siparis/admin-siparis.component';
import { AdminYemekComponent } from './admin-yemek/admin-yemek.component';
import { AuthService } from './auth.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CreateComponent } from './admin-yemek/create/create.component';
import { ListComponent } from './admin-yemek/list/list.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { DeleteDirective } from './directives/admin/delete.directive';
import { FileUploadModule } from './services/common/file-upload/file-upload.module';
import { FileUploadComponent } from './services/common/file-upload/file-upload.component';

import { FormsModule } from '@angular/forms';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { UpdateComponent } from './admin-yemek/update/update.component';
@NgModule({
  declarations: [
    AppComponent,
    RestaurantComponent,
    LoginComponent,
    YemekComponent,
    KampanyaComponent,
    ProfilComponent,
    SiparisComponent,
    AdminComponent,
    AdminSiparisComponent,
    AdminYemekComponent,
    CreateComponent,
    ListComponent,
    RegistrationFormComponent,
    DeleteDirective,
    FirstPageComponent,
    UpdateComponent
    ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule,
    HttpClientModule,
    FileUploadModule,
    MatSidenavModule, MatFormFieldModule, MatInputModule, MatButtonModule
  ],
  providers: [
    AuthService,
    { provide: "baseUrl", useValue: "https://localhost:7167/api", multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
