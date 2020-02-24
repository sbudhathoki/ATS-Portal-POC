import { Injectable } from '@angular/core';
import { Company } from './company';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  apiUrl = 'http://localhost:8080/api/company';

  constructor(private http: HttpClient) { }

createNewProfileOnServer(companyName: string, industry: string,
    firstName: string, lastName: string, title: string, 
    email: string, phoneNumber: string): Observable<Company> {
    const newProfile = new Company(companyName, industry, firstName, lastName, title, email, phoneNumber);
    const url = this.apiUrl;
    return this.http.post<Company>(url, newProfile);
  }
}
