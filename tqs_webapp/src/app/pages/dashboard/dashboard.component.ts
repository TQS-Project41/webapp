import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  categories = [
    {id: 1, name:'Promotions'},
    {id: 2, name:'Fruit'},
    {id: 3, name:'Meat'},
    {id: 4, name:'Personal Hygiene'}
  ];

}
