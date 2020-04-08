import { Injectable } from '@angular/core';
import { Question } from './question';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  apiUrl = 'http://localhost:8080/api';
  companyName = '';
  answers = [];

  constructor(private http: HttpClient) {}

  getQuestionsFromServer(): Observable<Question[]> {
    const url = this.apiUrl + "/questions";
    return this.http.get<Question[]>(url)
    .pipe(
      catchError(this.handleError)
      );
  }
  
  getQuestionByIdFromServer(id: number): Observable<Question> {
    const url =  `${this.apiUrl}/questions/${id}`;
    return this.http.get<Question>(url)
    .pipe(
      catchError(this.handleError)
      );
  }

  postQAResponseToServer(company: string, answers: any[]): Observable<HttpResponse<null>> {
    this.companyName = company;
    const url = `${this.apiUrl}/surveyanswers/${this.companyName}`;
    return this.http.post<null>(url, answers, {
      observe: "response"
    })
    .pipe(
      catchError(this.handleError)
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
