import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ResultService {
  apiUrl = 'http://localhost:8080/api';
  companyName = '';

  constructor(private http: HttpClient) {}

  getPdf(): Observable<Blob> {
    const url = `${this.apiUrl}/generatepdf/${this.companyName}`;
    return this.http.get(url, { responseType: 'blob'})
    .pipe(
      catchError(this.handleError));
  }

  getHTMLFromServer(company: string): Observable<any>{
    this.companyName = company;
    const url = `${this.apiUrl}/surveyreport/${this.companyName}`
    return this.http.get(url, {responseType: 'text'})
    .pipe(
      catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {
    // client-side or network error occurred
    console.error('An error occurred:', error.error.message);
  } else {
    // backend returned an unsuccessful response code
    console.error(
      `Backend returned code ${error.status}, ` +
      `body was: ${error.error}`);
  }
  return throwError(
    'An error occurred. Please try again later.');
  }
}