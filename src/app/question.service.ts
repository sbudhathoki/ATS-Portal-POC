import { Injectable } from '@angular/core';
import { Question } from './question';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
    return this.http.get<Question[]>(url);
  }

  postQAResponseToServer(company: string, answers: any[]): Observable<null> {
    this.companyName = company;
    const url = `${this.apiUrl}/surveyanswers/${this.companyName}`;
    return this.http.post<null>(url, answers);
  }
}