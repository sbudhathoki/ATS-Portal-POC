import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorNotificationService } from './error-notification.service'

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(private errorNotificationService: ErrorNotificationService) {}

  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      console.error('Client Side Error: ', errorResponse.error.message);
    } else {

      console.error('Server Side Error: ', errorResponse);
    }
    return throwError(
      'An error occurred. Please try again later.');
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
    .pipe(
      catchError(this.handleError)
    );
  }
}
