import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { Order } from 'src/app/classes/Order';
import { ProductCartItem } from 'src/app/classes/ProductCartItem';
import { CartService } from 'src/app/service/cart.service';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  @Input("order") order!: Order;
  products: ProductCartItem[] = [];
  show: boolean = false;
  
  constructor(private service: OrderService, private cartService: CartService) { }

  ngOnInit(): void {
    this.getProducts(this.order.id);
  }

  getProducts(id: number) {
    this.service.getProducts(id).subscribe((info) => {
      this.products = info;
    });
  }

  showProducts() {
    this.show = !this.show;
  }

  add2cart() {
    for (let p of this.products) {
      this.cartService.add2Cart(p.product.id, p.amount).subscribe({
        next: () => {
  
        }, 
        error: () => {
          console.log("ERRO AO ADICIONAR AO CARRINHO")
        }
      });
    }
  }


}
