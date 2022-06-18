import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Page } from 'src/app/classes/Page';
import { Product } from 'src/app/classes/Product';
import { CategoryService } from 'src/app/service/category.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categoryId!: number;
  card_number: number = 0;
  products!: Page<Product>;
  lst_products!: Product[];


  constructor( private router: Router, private service: CategoryService) { }

  ngOnInit(): void {
    const url_array = this.router.url.split("/");
    this.categoryId = +url_array[url_array.length - 1];
    this.getProducts();
  }

  getProducts() {
    this.service.getProducts(this.categoryId).subscribe((info) => {
      this.products = info;
      this.lst_products = info.content
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
