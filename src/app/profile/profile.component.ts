import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { CompanyService } from '../company.service';
import { Router } from '@angular/router';
import { Industry, Role } from './profile.interface';
import { Subscription } from 'rxjs';
import { Company } from '../company';
import { DataService } from '../data.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  company: Company;
  profileForm: FormGroup;
  submitSub: Subscription;
  name: string = "";
  currentCompany: string;
  serverError: string;
 

  industries: Industry[] = [
    {value: "Financial Services", viewValue: 'Financial Services'},
    {value: "Healthcare", viewValue: 'Healthcare'},
    {value: "Communications", viewValue: 'Communications'},
    {value: "Government", viewValue: 'Government'},
    {value: "Other", viewValue: 'Other'}
  ];

  roles: Role[] = [
    {value: "Senior Executive", viewValue: 'Senior Executive'},
    {value: "SVP", viewValue: 'Senior Vice President'},
    {value: "VP", viewValue: 'Vice President'},
    {value: "Director", viewValue: 'Director'},
    {value: "Program Manager", viewValue: 'Program Manager'},
    {value: "Other", viewValue: 'Other'}
  ];

  validationMessages = {
    'companyName': [
      { type: 'required', message: 'Company Name is required.' }
    ],
    'industry': [
      { type: 'required', message: 'Industry is required.'}
    ],
    'firstName': [
      { type: 'pattern', message: 'First Name contains illegal characters.' },
      { type: 'required', message: 'First Name is required.' }
    ],
    'lastName': [
      { type: 'pattern', message: 'Last Name contains illegal characters.' },
      { type: 'required', message: 'Last Name is required.' }
    ],
    'title': [
      { type: 'required', message: 'Role is required.' }
    ],
    'email': [
      { type: 'pattern', message: 'Email Address is invalid.' },
      { type: 'required', message: 'Email Address is required.' }
    ],
    'phoneNumber': [
      { type: 'required', message: 'Phone Number is required.' }
    ],
    'terms' : [
      {type: 'required', message: 'Please accept the terms and conditions'}
    ]
    
  };

  constructor(private companyService: CompanyService,
              private dataService: DataService,
              private fb: FormBuilder, 
              private router: Router) {
   }

  ngOnInit() {
    this.createForm();
    this.dataService.currentCompany.subscribe(company => this.name = company);
  }

  ngOnDestroy() {
    if(this.submitSub) {
      this.submitSub.unsubscribe();
    }
  }

  //for sharing company name with question master component
  shareCompanyName() {
    this.currentCompany = this.profileForm.value.companyName;
    this.dataService.updateCompany(this.currentCompany);
  }

  createForm() {
    this.profileForm = this.fb.group({
      companyName: new FormControl('', Validators.required),
      industry: new FormControl('', Validators.required),
      firstName: new FormControl('', Validators.compose([
        Validators.pattern("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$"),
        Validators.required])),
      lastName: new FormControl('', Validators.compose([
        Validators.pattern("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$"),
        Validators.required])),  
      title: new FormControl('', Validators.required),
      email: new FormControl('', Validators.compose([
        Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$"),
        Validators.required])),
      phoneNumber: new FormControl('', Validators.required),
      terms: new FormControl('', Validators.requiredTrue)
     
    });
  }

  mapValue(){
    this.company = {
        companyName: '',
        industry: '',
        firstName: '',
        lastName: '',
        title: '',
        email: '',
        phoneNumber: ''
     }
      this.company.companyName = this.profileForm.value.companyName;
      this.company.industry = this.profileForm.value.industry;
      this.company.firstName = this.profileForm.value.firstName;
      this.company.lastName = this.profileForm.value.lastName;
      this.company.title = this.profileForm.value.title;
      this.company.email = this.profileForm.value.email;
      this.company.phoneNumber = this.profileForm.value.phoneNumber;
  }

  onSubmit(): void {
    if (this.profileForm.valid) {
    this.mapValue();

    this.submitSub = this.companyService.createNewProfileOnServer(this.company).subscribe(
      () => this.router.navigate(['/question']),
      (err) => {  
        if (err instanceof HttpErrorResponse) {
          if(err.status === 400){
            this.serverError = err.error;
          } else {
            console.error(err)
          }
        } 
      });
    }
  }
}
