import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { List } from 'src/app/classes/List';
import { ProductCartItem } from 'src/app/classes/ProductCartItem';
import { CartService } from 'src/app/service/cart.service';
import { ListService } from 'src/app/service/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input("list") list!: List;
  @Output() deletedList = new EventEmitter<number>();
  products: ProductCartItem[] = [];
  show: boolean = false;
  
  constructor(private service: ListService, private cartService: CartService) { }

  ngOnInit(): void {
    this.getProducts(this.list.id)
  }

  deleteList(id: number) {
    this.service.delete(id).subscribe({
      next: () => {
        console.log("LISTA REMOVIDA COM SUCESSO")
        this.deletedList.emit(id);

      }, 
      error: () => {
        console.log("ERRO AO REMOVER LISTA")
      }
    });
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
