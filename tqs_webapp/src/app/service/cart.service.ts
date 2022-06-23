import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { ProductCartItem } from '../classes/ProductCartItem';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  constructor(private http: HttpClient) {}

  add2Cart(product_id: number, amount: number) {
    let params = new HttpParams();
    params = params.append('product', product_id);
    params = params.append('amount', amount);
    return this.http.post(environment.PRIVATE_API + "cart",  {}, { params }); 
  }


  getItems() : Observable<ProductCartItem[]> {
    return this.http.get<ProductCartItem[]>(environment.PRIVATE_API + "cart");
  }
  
  deleteItem(id: number) {
    return this.http.delete(environment.PRIVATE_API + "cart/"+ id);
  }

}