import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResultService {
  apiUrl = 'http://localhost:8080/api/surveyreport/Teksystems'

  constructor(private http: HttpClient) {}

  // getPdf(): Observable<Blob> {
  //   const url = this.apiUrl;
  //   return this.http.get(url, { responseType: 'blob'});
  // }

  getHTMLFromServer(): Observable<any>{
    const url = this.apiUrl;
    return this.http.get(url, {responseType: 'text'});
  }
}