import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResultService {
  apiUrl = 'http://localhost:8080/api';
  companyName = '';

  constructor(private http: HttpClient) {}

  getPdf(): Observable<Blob> {
    const url = `${this.apiUrl}/generatepdf/${this.companyName}`;
    return this.http.get(url, { responseType: 'blob'});
  }

  getHTMLFromServer(company: string): Observable<any>{
    this.companyName = company;
    const url = `${this.apiUrl}/surveyreport/${this.companyName}`;
    return this.http.get(url, {responseType: 'text'});
  }
}