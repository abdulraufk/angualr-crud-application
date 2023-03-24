
import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpRequest,
  HttpHandler,
 
} from '@angular/common/http';
 

@Injectable({
  providedIn: 'root',
})
export class TokeninterceptorService implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    // const token = localStorage.getItem('token');

    // if (token) {
    //   request = request.clone({
    //     setHeaders: {
    //       token: token,
    //     },
    //   });
    // }

    return next.handle(request);
  }
}




