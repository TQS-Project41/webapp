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

  redirect(id: number) {
    window.location.href = "category/"+id;
  }

}
