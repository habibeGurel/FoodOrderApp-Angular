import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { IRegisterViewModel } from '../services/common/models/register-view-model'; // Gerekirse modeli ekleyin
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent {
  formData: IRegisterViewModel = {
    name : "",
    username: "",
    telNo: "",
    password: "",
    confirmPassword: ""
  };

  constructor(private router: Router,private userService: UserService, private toastr: ToastrService) { }

  async onSubmit() {
    this.userService.register(this.formData).subscribe(
      (response) => {
        console.log('Kullanıcı başarıyla kaydedildi.', response);
        this.toastr.success('Kullanıcı başarıyla kaydedildi.', 'Başarılı');
        this.router.navigate(['/login']);
      },
      (error) => {
        console.error('Kayıt işlemi başarısız oldu.', error);
        this.toastr.error('Kayıt işlemi başarısız oldu.', 'Hata');
      }
    );
  }
}
