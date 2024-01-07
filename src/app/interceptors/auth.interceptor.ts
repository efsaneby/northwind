import { HttpInterceptorFn, HttpRequest, HttpEvent, HttpHeaders } from '@angular/common/http';
import { request } from 'express';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  let token = localStorage.getItem("token");
  let newRequest : HttpRequest<any>;
  newRequest = req.clone({
    headers: req.headers.set("Authorization", "Bearer " + token)
  })
  return next(req);
};
