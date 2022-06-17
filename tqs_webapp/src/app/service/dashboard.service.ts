import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Category } from '../classes/Category';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  
  constructor(private http: HttpClient) {}

   
  getCategories() : Observable<Category[]>{
    return this.http.get<any>(environment.PRIVATE_API + "categories");
  }
}