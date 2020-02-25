import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResultService {
  apiUrl = 'http://localhost:8080/api/survey'

  constructor(private http: HttpClient) {}

  getPdfFromServer(): Observable<any> {
    const url = this.apiUrl;
    return this.http.get<any>(url);
  }
}