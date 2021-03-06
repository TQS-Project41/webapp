import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Order } from '../classes/Order';
import { Page } from '../classes/Page';
import { Store } from '../classes/Store';


@Injectable({
  providedIn: 'root'
})
export class StoreService {
  
  constructor(private http: HttpClient) {}

  getStores() : Observable<Store[]> {
    return this.http.get<Store[]>(environment.PRIVATE_API + "stores");
  }

  
}