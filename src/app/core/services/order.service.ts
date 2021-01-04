import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Order } from '../models/core.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  url: string;

  constructor(
    private readonly http: HttpClient,
    private readonly authService: AuthService,
  ) { 
    this.url = environment.apiBasePath;
  }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.url}/getAllOrders?token=${this.authService.getUser().key}`);
  }
}
