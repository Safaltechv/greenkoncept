import { Injectable } from '@angular/core';
import { Observable, ObservableInput, throwError } from 'rxjs';
import { HttpEvent, HttpRequest, HttpHandler, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { NotifyService } from '../services/notify.service';


@Injectable({
  providedIn: 'root',
})
export class AppInterceptorService implements HttpInterceptor {
  constructor(
    private readonly notify: NotifyService,
  ) { }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError(this.handleAppError.bind(this))
    );
  }

  handleAppError(error: HttpErrorResponse): ObservableInput<any> {
    this.notify.error('Error occurred');
    return throwError(error);
  }
}