import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Page } from 'src/app/classes/Page';
import { Product } from 'src/app/classes/Product';
import { CategoryService } from 'src/app/service/category.service';


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
}
