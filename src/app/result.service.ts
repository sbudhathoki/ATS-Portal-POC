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

  // getPdf(): Observable<Blob> {
  //   const url = this.apiUrl;
  //   return this.http.get(url, { responseType: 'blob'});
  // }


  //use for testing
  getHTMLFromServer(company: string): Observable<any>{
    this.companyName = company; //company will be the default
    const url = `${this.apiUrl}/surveyreport/Costco`
    return this.http.get(url, {responseType: 'text'});
  }

  //use for dynamic report
  // getHTMLFromServer(company: string): Observable<any>{
  //   this.companyName = company;
  //   const url = `${this.apiUrl}/surveyreport/${this.companyName}`
  //   return this.http.get(url, {responseType: 'text'});
  // }
}