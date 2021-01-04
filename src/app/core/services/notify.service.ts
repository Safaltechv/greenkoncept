import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { IndividualToastConfig } from 'src/app/config/toast.config';

@Injectable({
  providedIn: 'root'
})
export class NotifyService {
  config = IndividualToastConfig;

  constructor(
    private readonly toastService: ToastrService,
  ) { }

  success(message: string, title = '') {
    this.toastService.success(message, title, this.config);
  }

  error(message: string, title = '') {
    this.toastService.error(message, title, this.config);
  }

  info(message: string, title = '') {
    this.toastService.info(message, title, this.config);
  }
}
