import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginResponse, User, UserCredentials } from '../models/core.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url: string;

  constructor(
    private readonly http: HttpClient,
  ) { 
    this.url = environment.apiBasePath;
  }

  /**
   * Logs user in
   * @param credentials 
   */
  loginHelper(credentials: UserCredentials): Observable<LoginResponse> {
    return this.http.get<LoginResponse>(`${this.url}/login?username=${credentials.username}&password=${credentials.password}`);
  }

  /**
   * Logs out user after clearing cache
   */
  logoutHelper(): Observable<any> {
    return this.http.get(`${this.url}/logout?token=${this.getUser().key}`);
  }

  /**
   * Set details of logged in user
   * @param user 
   */
  setLoggedUser(user: LoginResponse) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  /**
   * Get user details
   */
  getUser(): User {
    return JSON.parse(localStorage.getItem('user') || '{}');
  }
}
