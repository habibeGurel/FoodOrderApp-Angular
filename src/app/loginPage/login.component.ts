import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    loginForm: FormGroup;

    constructor(private router: Router, private userService: UserService, private toastr: ToastrService) {

        this.loginForm = new FormGroup({
            username: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required)
        });
    }

    async girisYap() {
        if (this.loginForm.valid) {
            const username = this.loginForm.get('username')?.value;
            const password = this.loginForm.get('password')?.value;

            try {
                const response = await this.userService.login(username, password).toPromise();
                if (response) {
                    this.toastr.success('Kullanıcı girişi başarılı..')
                    this.userService.isAuthenticated;
                    this.router.navigate(['main']); // Kullanıcı girişi başarılıysa anasayfaya yönlendir
                }else if(username === 'admin' && password === 'admin123') {
                    this.openAdminPageInNewTab();
                }
                else {
                    this.toastr.error('Kullanıcı adı veya şifre hatalı.', 'Giriş Başarısız');
                }
                
            } catch (error) {
                console.error('Bir hata oluştu.', error);
                console.log(error);
                this.toastr.error('Bir hata oluştu. Lütfen daha sonra tekrar deneyin.', 'Hata');
            }
        }
    }

    isAdmin(): boolean {
        const username = this.loginForm.get('username')?.value;
        const password = this.loginForm.get('password')?.value;

        return username === 'admin' && password === 'admin123';
    }

    openAdminPageInNewTab() {
        window.open('/admin', '_blank');
    }
    
}

