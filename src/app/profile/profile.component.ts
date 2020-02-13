import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Industry, Role } from './profile.interface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;

  industries: Industry[] = [
    {value: 1, viewValue: 'Financial Services'},
    {value: 2, viewValue: 'Healthcare'},
    {value: 3, viewValue: 'Communications'},
    {value: 4, viewValue: 'Government'},
    {value: 5, viewValue: 'Other'}
  ];

  roles: Role[] = [
    {value: 1, viewValue: 'Senior Executive'},
    {value: 2, viewValue: 'SVP'},
    {value: 3, viewValue: 'VP'},
    {value: 4, viewValue: 'Director'},
    {value: 5, viewValue: 'Program Manager'},
    {value: 6, viewValue: 'Other'}
  ];

  validationMessages = {
    'company': [
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
    'role': [
      { type: 'required', message: 'Role is required.' }
    ],
    'email': [
      { type: 'pattern', message: 'Email Address is invalid.' },
      { type: 'required', message: 'Email Address is required.' }
    ],
    'phone': [
      { type: 'required', message: 'Phone Number is required.' }
    ]
  };

  constructor(private fb: FormBuilder, 
              private router: Router) {
   }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.profileForm = this.fb.group({
      company: new FormControl('', Validators.required),
      industry: new FormControl('', Validators.required),
      firstName: new FormControl('', Validators.compose([
        Validators.pattern("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$"),
        Validators.required])),
      lastName: new FormControl('', Validators.compose([
        Validators.pattern("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$"),
        Validators.required])),  
      role: new FormControl('', Validators.required),
      email: new FormControl('', Validators.compose([
        Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$"),
        Validators.required])),
      phone: new FormControl('', Validators.required)
    });
  }

  onSubmit(): void {
    console.log(this.profileForm.value);
    if (this.profileForm.valid){
      this.router.navigate(['/question']);
    }
  }
}

