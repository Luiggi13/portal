import { Injectable } from "@angular/core";

import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpHeaders,
} from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { SessionService } from "../services";


/** Pass untouched request through to the next request handler. */
@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {
  constructor(private sessionService: SessionService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log(req.url);
    
    if (req.url.startsWith("/api")) {
      const urlFinal = req.url.split('/api')[1]
      req = req.clone({ url: environment.url + urlFinal });
    }
    if (!this.sessionService.isLogged()) {
      return next.handle(req);
    }
    return next.handle(
      req.clone({
        headers: req.headers.set(
          "X-User-Token",
          environment.url + req.url
        ),
      })
    );
  }
}
