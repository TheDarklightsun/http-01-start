import {Injectable} from '@angular/core';
import {HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {
 intercept(req: HttpRequest<any>, next: HttpHandler) {
   const modifiedRequest = req.clone({
     headers: req.headers.append('Auth', 'xyz')
   });

   return next.handle(modifiedRequest);
 }
  constructor() { }
}
