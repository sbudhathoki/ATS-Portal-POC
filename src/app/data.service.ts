import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {
  private companySource = new BehaviorSubject<string>("Teksystems");
  currentCompany = this.companySource.asObservable();

  constructor() { }

  updateCompany(company: string) {
    this.companySource.next(company)
  }
}
