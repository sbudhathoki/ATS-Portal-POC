import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable()
export class AdminService {
  apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  getUsersFromServer(): Observable<User[]> {
    const url = this.apiUrl + "/company";
    return this.http.get<User[]>(url);
  }
}
