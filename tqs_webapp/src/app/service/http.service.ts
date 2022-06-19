import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root',
})
export class HTTPService implements HttpInterceptor {

    constructor(private loginService: AuthService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        let token = localStorage.getItem('token');
        
        if (token) {
            request = request.clone({
                setHeaders: {
                Authorization: `Bearer ${token}`,
                },
            });
        }

        return next.handle(request).pipe(
            catchError((err) => {

                if (err.status == 403) {
                    return throwError(err)
                    // return this.intercept(request, next);
                    
                } else {
                    const error = err.error|| err.statusText;
                    return throwError(error);
                }
                
            })
        );
    }
}