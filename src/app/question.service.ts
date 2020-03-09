import { Injectable } from '@angular/core';
import { Question } from './question';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  apiUrl = 'http://localhost:8080/api';
  companyName = "Teksystems";
  answers = [];

  constructor(private http: HttpClient) {}

  getQuestionsFromServer(): Observable<Question[]> {
    const url = this.apiUrl + "/questions";
    return this.http.get<Question[]>(url);
  }
  
  getQuestionByIdFromServer(id: number): Observable<Question> {
    const url =  `${this.apiUrl}/questions/${id}`;
    return this.http.get<Question>(url);
  }

  getAnswers(): any[] {
    return this.answers;
  }

  postQAResponseToServer(answers: any[]): Observable<null> {
    const url = `${this.apiUrl}/survey/${this.companyName}`;
    console.log("Company Name: " + this.companyName);
    return this.http.post<null>(url, answers);
  }
}
