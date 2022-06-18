import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/classes/Category';
import { Page } from 'src/app/classes/Page';
import { Product } from 'src/app/classes/Product';
import { DashboardService } from 'src/app/service/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  categories!: Category[];
  products!: Page<Product>;
  card_number: number = 0;

  lst_products!: Product[];
  
  constructor(private service: DashboardService) { }

  ngOnInit(): void {
    this.getCategories();
    this. getAllProducts() ;
  }

  getCategories() {
    this.service.getCategories().subscribe((info) => {
      console.log(info)
      this.categories = info;
    });
  }

  getAllProducts() {
    this.service.getAllProducts().subscribe((info) => {
      console.log(info)
      this.products = info;
      this.lst_products = this.products.content
    });
  }

  getQuantity(product: Product) {
    /* console.log("[", product.name ,"]:", product.quantity) */

    let json = '[';
    // atualizar a lista
    for (var p of this.lst_products) {
      if (p.id == product.id) {
        p.quantity = product.quantity
        p.total_price = p.quantity * +p.price
        this.card_number += p.quantity * +p.price
      }

      if (p.quantity > 0) {
        console.log("[", product.name ,"]:", product.quantity)
        json += '{"id": "'+ p.id +'", "name": "'+ p.name +'", "price": "'+ p.price +'", "quantity": '+ p.quantity +', "total_price": '+ p.total_price +'}'
        json = json.replace('}{', '},{')
      }
    }

    json += ']'

    console.log(json)

    localStorage.setItem('lst_products', json);

    console.log("[CART]:", this.card_number)
    console.log("--------------------------------")
  }

}
