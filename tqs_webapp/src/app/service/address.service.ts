import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Address } from '../classes/Address';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class AddressService {
  
  constructor(private http: HttpClient) {}

  getAllAddresses() : Observable<Address[]>{
    return this.http.get<Address[]>(environment.PRIVATE_API +'addresses')
  }

  add(address: string, city: string, country: string, zipcode: string) {
    let params = new HttpParams();
    params = params.append('address', address);
    params = params.append('city', city);
    params = params.append('country', country);
    params = params.append('zipcode', zipcode);
    return this.http.post(environment.PRIVATE_API +'addresses', {}, {params});
  }

}