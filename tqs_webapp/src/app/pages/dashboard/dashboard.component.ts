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
    {id: 1, name:'Promoções'},
    {id: 2, name:'Frutas e Legumes'},
    {id: 3, name:'Charcutaria'},
    {id: 4, name:'Lácteos'},
    {id: 5, name:'Congelados'},
    {id: 6, name:'Bebidas'},
    {id: 7, name:'Higiene Pessoal'},
    {id: 8, name:'Peixe'},
  ];

}
