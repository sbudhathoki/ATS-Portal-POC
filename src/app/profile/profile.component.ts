import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { CompanyService } from '../company.service';
import { Router } from '@angular/router';
import { Industry, Role } from './profile.interface';
import { Subscription } from 'rxjs';
import { Company } from '../company';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  submitSub: Subscription;

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
    ]
  };

  constructor(private companyService: CompanyService,
              private fb: FormBuilder, 
              private router: Router) {
   }

  ngOnInit() {
    this.createForm();
  }

  ngOnDestroy() {
    if(this.submitSub) {
      this.submitSub.unsubscribe();
    }
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
      phoneNumber: new FormControl('', Validators.required)
    });
  }

  onSubmit(): void {
    if (this.profileForm.valid){
    const companyName = this.profileForm.value.companyName;
    const industry = this.profileForm.value.industry;
    const firstName = this.profileForm.value.firstName;
    const lastName = this.profileForm.value.lastName;
    const title = this.profileForm.value.title;
    const email = this.profileForm.value.email;
    const phoneNumber = this.profileForm.value.phoneNumber;

    this.submitSub = this.companyService.createNewProfileOnServer(companyName, 
      industry, firstName, lastName, title, email, phoneNumber).subscribe(
      (response: Company) => {
      console.log("response: ", response);
    },
      err => { console.log("error: " + err);
      });


      this.router.navigate(['/question/1']);
    }
  }
}

