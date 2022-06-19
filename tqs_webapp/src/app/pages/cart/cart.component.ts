import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/classes/Product';
import { ProductCartItem } from 'src/app/classes/ProductCartItem';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  product!: Product;
  lst_products: ProductCartItem[] = [];
  total_price: number = 0;
  scheduled: boolean = false

  
  constructor(private service: CartService) { }

  ngOnInit(): void {
    this.getCartItems();
  }


  check() {
    if ((<HTMLInputElement>document.getElementById("Schedule")).checked) {
      this.scheduled = true
      
    } else {
      this.scheduled = false
    }
  }

  getCartItems() {
    this.service. getItems().subscribe((info) => {
      this.lst_products = info;
      this.lst_products.forEach((p) => {
        this.total_price += p.amount * p.product.price
      });
    });
  }

  removeItem(id: any) {
    console.log("REMOVING ITEM<"+ id +">")
  }

}
