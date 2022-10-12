import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpClientInterceptor implements HttpInterceptor {


  token: string = "5dadbb1d-03fc-11ed-baea-7640edfdd6b4";
  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // Modify the body
    if (request.method == "PUT") {
      return next.handle(this.addAuthenticationTokenAndModifyData(request));
    }
    return next.handle(this.addAuthenticationToken(request));
  }

  addAuthenticationToken(request: HttpRequest<any>) {
    return request.clone({
      setHeaders: {
        Authorization: `Basic ${this.token}`
      }
    })
  }
  addAuthenticationTokenAndModifyData(request: HttpRequest<any>) {
    return request.clone({
      setHeaders: {
        Authorization: `Basic ${this.token}`
      },
      body: { "data" : "Modified"}
    })
  }
}