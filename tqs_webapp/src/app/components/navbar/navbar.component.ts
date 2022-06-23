import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  quantity: any = null;

  constructor() { }

  ngOnInit(): void {
  }

  checkIfLoggedIn() {
    if (localStorage.getItem('token')) return true
    return false
  }

  clear() {
    localStorage.removeItem('token');
  }

}
