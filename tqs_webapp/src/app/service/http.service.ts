import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root',
})
export class HTTPService implements HttpInterceptor {

    constructor(private loginService: AuthService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        if (this.loginService.getToken()) {
            request = request.clone({
                setHeaders: {
                Authorization: `Bearer ${this.loginService.getToken()}`,
                },
            });
        }

        return next.handle(request)
    }
}