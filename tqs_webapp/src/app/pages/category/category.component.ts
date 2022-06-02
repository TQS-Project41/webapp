import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/classes/Product';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  card_number: number = 0;

  products : Product[] = [
    {id: 1, name:'Cereais Chocapic NESTLÉ', price:'5', quantity:0, total_price: 0},
    {id: 2, name:'Água Luso 1L', price:'2.5', quantity:0, total_price: 0},
    {id: 3, name:'Colgate', price:'6', quantity:0, total_price: 0},
    {id: 4, name:'Cerveja Super Bock', price:'0.5', quantity:0, total_price: 0}
  ];

  getQuantity(product: Product) {
    /* console.log("[", product.name ,"]:", product.quantity) */

    let json = '[';
    // atualizar a lista
    for (var p of this.products) {
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
