import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/classes/Category';
import { List } from 'src/app/classes/List';
import { Page } from 'src/app/classes/Page';
import { Product } from 'src/app/classes/Product';
import { DashboardService } from 'src/app/service/dashboard.service';
import { ListService } from 'src/app/service/list.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  categories!: Category[];
  products!: Page<Product>;
  card_number: number = 0;
  lists!: List[];

  lst_products!: Product[];
  
  constructor(private service: DashboardService, private listService: ListService) { }

  ngOnInit(): void {
    this.getCategories();
    this.getAllProducts();
    this.getAllLists();
  }

  getAllLists() {
    if (this.checkIfLoggedIn())
      this.listService.getLists().subscribe((info) => {
        this.lists = info.content;
        console.log(this.lists)
      });
  }

  getCategories() {
    this.service.getCategories().subscribe((info) => {
      console.log(info)
      this.categories = info;
    });
  }

  getAllProducts() {
    this.service.getAllProducts().subscribe((info) => {
      this.products = info;
      this.lst_products = this.products.content
    });
  }

  redirect(id: number) {
    window.location.href = "category/"+id;
  }

  checkIfLoggedIn() {
    if (localStorage.getItem('token')) return true
    return false
  }
}
