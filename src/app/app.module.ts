import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './features/login/login.component';
import { HierarchyComponent } from './features/hierarchy/hierarchy.component';
import { OrdersComponent } from './features/orders/orders.component';
import { CustomerComponent } from './features/customer/customer.component';
import { SharedModule } from './shared/shared.module';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { AppInterceptorService } from './core/interceptors/app-interceptor.service';
import { ToastrModule } from 'ngx-toastr';
import { GlobalToastConfig } from './config/toast.config';
import { HeaderComponent } from './core/components/header/header.component';
import { NumbersOnlyDirective } from './core/directives/numbers-only.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HierarchyComponent,
    OrdersComponent,
    CustomerComponent,
    DashboardComponent,
    HeaderComponent,
    NumbersOnlyDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    ToastrModule.forRoot(GlobalToastConfig),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppInterceptorService,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
