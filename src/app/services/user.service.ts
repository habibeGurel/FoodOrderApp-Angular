import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IRegisterViewModel } from './common/models/register-view-model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://localhost:7167';
  private isLoggedIn: boolean = false;
  private loggedInUsername: string | null = null;

  constructor(private http: HttpClient) { }

  public isAuthenticated(): boolean {
    return this.isLoggedIn;
  }

  register(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/Auth/register`, userData);
  }

  login(username: string, password: string): Observable<any> {
    const loginData = { username, password };
    this.isLoggedIn = true;
    this.loggedInUsername = loginData.username;
    this.isAuthenticated;
    return this.http.post(`${this.apiUrl}/api/Auth/login`, loginData);
  }

  logout(): void {
    this.isLoggedIn = false;
    this.loggedInUsername = null;
  }

  public getLoggedInUsername(): string | null {
    return this.loggedInUsername;
  }

  readUserProfile(): Observable<IRegisterViewModel | null> {
    if (this.isAuthenticated) {
      const loggedInUsername = this.getLoggedInUsername();
      console.log(loggedInUsername);
      if (!loggedInUsername) {
        console.error('Oturum açmış kullanıcı bulunamadı.');
        return null;
      }
    }
    return this.http.get<IRegisterViewModel>(`${this.apiUrl}/api/Auth/profile`);
  }
}
