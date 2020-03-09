import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acknowledgment',
  templateUrl: './acknowledgment.component.html',
  styleUrls: ['./acknowledgment.component.css']
})
export class AcknowledgmentComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {} 

  showResults() {
    this.router.navigate(['/result'])
  }
}
