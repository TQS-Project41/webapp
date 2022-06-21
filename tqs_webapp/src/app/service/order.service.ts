import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Order } from '../classes/Order';
import { Page } from '../classes/Page';
import { ProductCartItem } from '../classes/ProductCartItem';


@Injectable({
  providedIn: 'root'
})
export class OrderService {
  
  constructor(private http: HttpClient) {}

  getOrders() : Observable<Page<Order>> {
    return this.http.get<Page<Order>>(environment.PRIVATE_API + "orders");
  }


  createOrder(store_id: number, address_id: number, time: string) {
    let params = new HttpParams();
    params = params.append('store', store_id);
    params = params.append('address', address_id);
    params = params.append('deliveryTimestamp', time);
    return this.http.post(environment.PRIVATE_API + "orders", {}, {params});
  }

  getProducts(id: number) : Observable<ProductCartItem[]> {
    return this.http.get<ProductCartItem[]>(environment.PRIVATE_API + "orders/"+ id +"/products");
  }
  
}