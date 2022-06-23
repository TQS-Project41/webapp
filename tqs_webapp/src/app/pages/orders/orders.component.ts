import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/classes/Order';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders: Order[] = [];

  constructor(private service: OrderService) { }

  ngOnInit(): void {
    this.getAllOrders();
  }


  getAllOrders() {
    this.service.getOrders().subscribe((info) => {
      this.orders = info.content;
      console.log(info) // mapa com order + satus
    });
  }


}
