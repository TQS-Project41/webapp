import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/classes/Product';
import { ProductCartItem } from 'src/app/classes/ProductCartItem';
import { CartService } from 'src/app/service/cart.service';
import { OrderService } from 'src/app/service/order.service';

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

  
  constructor(private service: CartService, private orderService: OrderService) { }

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

  removeItem(id: number) {
    console.log("REMOVING ITEM<"+ id +">")
    this.service.deleteItem(id).subscribe({
      next: () => {
        console.log("ITEM REMOVIDO COM SUCESSO")

        let productItem = this.lst_products.find(x => x.product.id == id)
        if (productItem) {
          const index = this.lst_products.indexOf(productItem, 0);
          if (index > -1) this.lst_products.splice(index, 1);
        }
        

      }, 
      error: () => {
        console.log("ERRO AO REMOVER ITEM DO CARRINHO")
      }
    });
  }

  updateAmount() {
    console.log("ALTERAR A QUANTIDADE")
  }

  createOrder() {
    console.log("CREATE ORDER")

    // adress id
    // store id
    let deliveryTimestamp = formatDate( new Date(), 'dd-MM-yyyy', 'en_US').toString()
    // this.orderService.createOrder().subscribe();
  }

}
