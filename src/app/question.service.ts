import { Injectable } from '@angular/core';
import { Question } from './question';
import { HttpClient } from '@angular/common/http'; //for web api, not currently in use
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  apiUrl = 'http://localhost:8080/api' //for web api, not currently in use

  constructor(private http: HttpClient) {}

  getQuestionsFromServer(): Observable<Question[]> {
    const url = this.apiUrl + "/questions";
    return this.http.get<Question[]>(url);
  }
  
  getQuestionByIdFromServer(id: number): Observable<Question> {
    const url =  `${this.apiUrl}/questions/${id}`;
    return this.http.get<Question>(url);
  }
}
