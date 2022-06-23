import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  

  constructor(private http: HttpClient) {}

  logIn(json: JSON) {
    let req =  this.http.post(environment.PRIVATE_API + "login", json)

    req.subscribe({
      next: (info: any) => {
        console.log("sucesso", info)
        localStorage.setItem('token', info["token"]);

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