import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { CustomerComponent } from './features/customer/customer.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { HierarchyComponent } from './features/hierarchy/hierarchy.component';
import { LoginComponent } from './features/login/login.component';
import { OrdersComponent } from './features/orders/orders.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'hierarchy', component: HierarchyComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'customer', component: CustomerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
