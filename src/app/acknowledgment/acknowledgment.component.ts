import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

//This component thanks the user and displays the company name (from Data Service) that was entered in the profile form.
@Component({
  selector: 'app-acknowledgment',
  templateUrl: './acknowledgment.component.html',
  styleUrls: ['./acknowledgment.component.css']
})
export class AcknowledgmentComponent implements OnInit {
  title = "Agile Readiness Review";
  companyName = "";

  constructor(private router: Router,
              private dataService: DataService) {}

  ngOnInit() {
    this.dataService.currentCompany.subscribe(company => this.companyName = company);
  } 

  showResults() {
    this.router.navigate(['/result'])
  }
}
