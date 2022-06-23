import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Address } from 'src/app/classes/Address';
import { Product } from 'src/app/classes/Product';
import { ProductCartItem } from 'src/app/classes/ProductCartItem';
import { Store } from 'src/app/classes/Store';
import { AddressService } from 'src/app/service/address.service';
import { CartService } from 'src/app/service/cart.service';
import { OrderService } from 'src/app/service/order.service';
import { StoreService } from 'src/app/service/store.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  product!: Product;
  lst_products: ProductCartItem[] = [];
  stores: Store[] = []
  addresses: Address[] = []
  total_price: number = 0;
  scheduled: boolean = false
  storeSelected: string = '';
  addressSelected: string = '';
  addressError: boolean = false
  storeError: boolean = false;
  fee: number = 0;

  
  constructor(private service: CartService, private orderService: OrderService, 
    private storeService: StoreService, private addressService: AddressService) { }

  ngOnInit(): void {
    this.getCartItems();
    this.getStores();
    this.getAddresses();
    this.getFee();
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

    if (this.storeSelected == '') this.storeError = true
    else this.storeError = false
    if (this.addressSelected == '') this.addressError = true
    else this.addressError = false


    if (!this.storeError && !this.addressError ) {
      let store = parseInt(this.storeSelected)
      let address = parseInt(this.addressSelected)
      let deliveryTimestamp = formatDate(new Date(), 'dd-MM-yyyy HH:mm', 'en_US')

      this.storeError = false
      this.addressError = false

      this.orderService.createOrder(store, address, deliveryTimestamp).subscribe();
    }
  }

  getStores() {
    this.storeService.getStores().subscribe((info) => {
      this.stores = info;
      console.log(info)
    });
  }

  getAddresses() {
    this.addressService.getAllAddresses().subscribe((info) => {
      this.addresses = info;
      console.log(info)
    });
  }

  getFee() {
    this.orderService.getFee(1).subscribe((info: any) => {
      this.fee = info["fee"]
    });

  }

}
