import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/classes/Product';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  scheduled: boolean = false
  constructor() { }
  product!: Product;
  lst_products: Product[] = [];
  total_price: number = 0;

  ngOnInit(): void {
    // console.log(localStorage.getItem('lst_products'));
    var json = <string>localStorage.getItem('lst_products');
    let lst = JSON.parse(json);

    console.log(lst)

    for (var p of lst) {
      this.product = { id: p.id, name: p.name, price: p.price, quantity: p.quantity, total_price: p.total_price};
      this.total_price += p.total_price
      this.lst_products.push( this.product )
    }

    console.log(this.lst_products)

  }

  check() {
    if ((<HTMLInputElement>document.getElementById("Schedule")).checked) {
      this.scheduled = true
      
    } else {
      this.scheduled = false
    }
  }

}
