import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Category } from '../classes/Category';
import { Product } from '../classes/Product';
import { Page } from '../classes/Page';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  
  constructor(private http: HttpClient) {}

  getCategories() : Observable<Category[]>{
    return this.http.get<Category[]>(environment.PRIVATE_API + "categories");
  }

  getAllProducts() : Observable<Page<Product>>{
    return this.http.get<Page<Product>>(environment.PRIVATE_API + "products");
  }
}