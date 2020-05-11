import { Injectable } from '@angular/core';
import { Company } from './company';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  apiUrl = 'http://localhost:8080/api/company';

  constructor(private http: HttpClient) { }

  createNewProfileOnServer(company: Company): Observable<HttpResponse<any>> {
    return this.http.post<Company>(this.apiUrl, company, {observe: 'response'});
  }
}
