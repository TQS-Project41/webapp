import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  products = [
    {id: 1, name:'Cereais Chocapic NESTLÉ'},
    {id: 2, name:'Água Luso 1L'},
    {id: 3, name:'Colgate'},
    {id: 4, name:'Cerveja Super Bock'}
  ];

}
