import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/core/services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  orders: any;

  constructor(
    private readonly orderService: OrderService,
  ) { }

  ngOnInit(): void {
    this.orders = this.orderService.getOrders();
  }

}
