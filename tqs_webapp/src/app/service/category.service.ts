import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Product } from '../classes/Product';
import { Page } from '../classes/Page';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  
  constructor(private http: HttpClient) {}

  getProducts(id: number) : Observable<Page<Product>> {
    return this.http.get<Page<Product>>(environment.PRIVATE_API + "products"); // falta enviar o id da categoria
  }

}