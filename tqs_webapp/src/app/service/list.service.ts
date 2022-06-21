import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { List } from '../classes/List';
import { Page } from '../classes/Page';
import { ProductCartItem } from '../classes/ProductCartItem';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  
  constructor(private http: HttpClient) {}

  createList(name: string) {
    let params = new HttpParams();
    params = params.append('name', name);
    return this.http.post(environment.PRIVATE_API + "stored_lists",  {}, { params });
  }

  getLists() {
    return this.http.get<Page<List>>(environment.PRIVATE_API + "stored_lists");
  }

  delete(id: number) {
    return this.http.delete(environment.PRIVATE_API + "stored_lists/"+ id);
  }

  getProducts(id: number) : Observable<ProductCartItem[]> {
    return this.http.get<ProductCartItem[]>(environment.PRIVATE_API + "stored_lists/"+ id +"/products");
  }

  add2List(id: number, product_id: number, amount: number) {
    let params = new HttpParams();
    params = params.append('product', product_id);
    params = params.append('amount', amount);
    return this.http.post(environment.PRIVATE_API + "stored_lists/"+ id,  {}, { params }); 
  }
}