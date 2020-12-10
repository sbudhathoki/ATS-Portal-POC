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

//This service handles global error responses and displays a snackbar alert with the error message.
@Injectable()
export class ErrorNotificationService implements HttpInterceptor{

  constructor(private snackBar: MatSnackBar) { }

  private handleError(error: HttpErrorResponse) {
    var errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      errorMessage = `${error.error.message}`;
      console.error("Client Side Error: " + errorMessage);
    } else {
      var serverError = `${JSON.stringify(error.error)}`
      if (serverError.includes("timestamp")) {
        errorMessage = "Error generating report as company profile not found"
        console.error("Server Side Error: " + errorMessage);
      } 
      else if (serverError.includes("isTrusted")) {
        errorMessage = "Server is not responding"
        console.error("Server Side Error: " + errorMessage);
      } 
      else if (serverError.includes("{}")) {
        errorMessage = "Error generating PDF report"
        console.error("Server Side Error: " + errorMessage);
      } else {
        errorMessage = serverError.replace(/^"|"$/g, '');
        console.error("Server Side Error: " + errorMessage);
      }
    }
	  this.snackBar.open((errorMessage), 'Close');
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



