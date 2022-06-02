import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/classes/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input("product") p!: Product;
  @Output() rcv_product = new EventEmitter<Product>();

  constructor() { }

  ngOnInit(): void {
  }


  add2cart() {
    this.p.quantity = parseInt((<HTMLInputElement>document.getElementById("input_"+ this.p.id)).value);
    this.rcv_product.emit(this.p);
  }
}
