import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/classes/Category';
import { DashboardService } from 'src/app/service/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  categories!: Category[];
  
  constructor(private service: DashboardService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.service.getCategories().subscribe((info) => {
      console.log(info)
      this.categories = info;
    });
  }

}
