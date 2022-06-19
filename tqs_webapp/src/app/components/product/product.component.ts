import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/classes/Product';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input("product") p!: Product;

  constructor(private service: CartService) { }

  ngOnInit(): void {
  }


  add2cart() {
    let quantity = parseInt((<HTMLInputElement>document.getElementById("input_"+ this.p.id)).value);
    this.service.add2Cart(this.p.id, quantity).subscribe();
  }
}
