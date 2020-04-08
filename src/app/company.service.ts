import { Injectable } from '@angular/core';
import { Company } from './company';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  apiUrl = 'http://localhost:8080/api/company';

  constructor(private http: HttpClient) { }

  createNewProfileOnServer(company: Company): Observable<Company> {
    return this.http.post<Company>(this.apiUrl, company)
      .pipe(
        catchError(this.handleError) // then handle the error
      );
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
  };
}
