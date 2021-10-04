import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}


  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const tokenRaw = localStorage.getItem("loginKey");
    const authHeader = `Bearer ${tokenRaw}`;
    const authResult = request.clone({
        headers: request.headers.set(
            'Authorization',
            authHeader
        )
    });

    return next.handle(authResult);
  }
}
