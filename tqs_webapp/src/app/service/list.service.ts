import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { List } from '../classes/List';
import { Page } from '../classes/Page';

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
}