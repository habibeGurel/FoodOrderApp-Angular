import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { IRegisterViewModel } from '../services/common/models/register-view-model';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  userProfile: IRegisterViewModel | null = null; // Kullanıcı bilgilerini saklamak için değişken

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    // this.loadUserProfile();
  }
  
  // async loadUserProfile() {
  //   try {
  //     const loggedInUsername = this.userService.getLoggedInUsername();
  //     if (!loggedInUsername) {
  //       console.error('Oturum açmış kullanıcı bulunamadı.');
  //       return;
  //     }
  
  //     this.userService.readUserProfile().subscribe(
  //       userProfile => {
  //         if (userProfile) {
  //           this.userProfile = userProfile;
  //         } else {
  //           console.error('Profil bilgileri alınamadı.');
  //         }
  //       },
  //       error => {
  //         console.error('Profil bilgileri alınırken bir hata oluştu: ', error);
  //       }
  //     );
  //   } catch (error) {
  //     console.error('Profil bilgileri alınırken bir hata oluştu: ', error);
  //   }
  // }
  
}

