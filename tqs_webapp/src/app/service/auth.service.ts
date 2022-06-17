import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private token: string = '';
  constructor(private http: HttpClient) {}

  isLoggedIn = () => this.token !== ''

  logOut = () => this.token = ''

  getToken() {
    return this.token;
  }

  setToken(token: string) {
    this.token = token;
  }

   
  logIn(json: JSON) {
    let req =  this.http.post(environment.PRIVATE_API + "login", json)

    req.subscribe({
      next: (info: any) => {
        this.token = info["token"];

      }, 
      error: (error) => {
        console.log("[ERROR]", error);
      }
    });
    
    return req
  }

  
  register(json: JSON) {
    return this.http.post(environment.PRIVATE_API + "register", json);
  }

}