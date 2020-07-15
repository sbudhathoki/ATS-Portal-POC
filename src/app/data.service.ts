import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

//This service passes the company name entered by the user in the
//profile form to the question-master and acknowledgment components.
//TEKsystems is the default value if a company name is not entered.

@Injectable()
export class DataService {
  
  private companySource = new BehaviorSubject<string>("TEKsystems");
  currentCompany = this.companySource.asObservable();

  constructor() { }

  updateCompany(company: string) {
    this.companySource.next(company)
  }
}

