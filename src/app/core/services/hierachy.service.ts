import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class HierachyService {
  url: string;

  constructor(
    private readonly http: HttpClient,
    private readonly authService: AuthService,
  ) {
    this.url = environment.apiBasePath;
  }

  getHierarchy(): Observable<any> {
    return this.http.get(`${this.url}/node-hierarchy?token=${this.authService.getUser().key}`);
  }
}
