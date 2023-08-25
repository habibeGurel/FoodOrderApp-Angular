import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggedIn = false;

  constructor() { }

  login(){
    this.isLoggedIn=true;
  }

  logOut(){
    this.isLoggedIn=false;
  }
  isLoggedInUser(){
    return this.isLoggedIn;
  }
}
