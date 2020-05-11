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
import { MatSnackBar } from '@angular/material';

@Injectable()
export class ErrorNotificationService implements HttpInterceptor{

  constructor(private snackBar: MatSnackBar) { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error(`Client Side Error: ${error.error.message}`);
    } else {
      console.error(`Server Side Error: ${JSON.stringify(error.error)}`)
    }
	  this.snackBar.open(JSON.stringify(error.error), 'Close');
    return throwError(
      error);
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
    .pipe(
      catchError(this.handleError.bind(this))
    );
  }
}



