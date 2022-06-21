import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { List } from 'src/app/classes/List';
import { Product } from 'src/app/classes/Product';
import { CartService } from 'src/app/service/cart.service';
import { ListService } from 'src/app/service/list.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input("product") p!: Product;
  @Input("lists") lists!: List[];
  error: boolean = false;

  constructor(private cartservice: CartService, private listService: ListService) { }

  ngOnInit(): void {
  }


  add2cart() {
    let quantity = parseInt((<HTMLInputElement>document.getElementById("input_"+ this.p.id)).value);
    if (quantity > 0) {
      this.error = false
      this.cartservice.add2Cart(this.p.id, quantity).subscribe();

    } else this.error = true
  }

  add2list(id: number) {
    let quantity = parseInt((<HTMLInputElement>document.getElementById("input_"+ this.p.id)).value);
    if (quantity > 0) {
      this.error = false
      this.listService.add2List(id, this.p.id, quantity).subscribe();
    } else this.error = true
  }

}
