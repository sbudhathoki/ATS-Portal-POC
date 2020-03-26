import { Injectable } from '@angular/core';
import { Question } from './question';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from './company';

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
  
  getQuestionByIdFromServer(id: number): Observable<Question> {
    const url =  `${this.apiUrl}/questions/${id}`;
    return this.http.get<Question>(url);
  }

  createNewProfileOnServer(companyName: string, industry: string,
    firstName: string, lastName: string, title: string, 
    email: string, phoneNumber: string): Observable<Company> {
    const newProfile = new Company(companyName, industry, firstName, lastName, title, email, phoneNumber);
    const url = this.apiUrl + "/company";
    return this.http.post<Company>(url, newProfile);
  }

  postQAResponseToServer(company: string, answers: any[]): Observable<null> {
    this.companyName = company;
    const url = `${this.apiUrl}/surveyanswers/${this.companyName}`;
    console.log("Company Name: " + this.companyName);
    return this.http.post<null>(url, answers);
  }
}
