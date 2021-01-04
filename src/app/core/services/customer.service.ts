import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CustomerPayload } from '../models/core.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  url: string;

  constructor(
    private readonly http: HttpClient,
    private readonly authService: AuthService,
  ) { 
    this.url = environment.apiBasePath;
  }

  /**
   * Adds new customer
   * @param payload 
   */
  addCustomer(payload: CustomerPayload): Observable<any> {
    return this.http.post(`${this.url}/createCustomer?token=${this.authService.getUser().key}`, payload);
  }
}
