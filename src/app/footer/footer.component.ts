import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  name = "TEKsystems Global Services"

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
   
  }

  hasRoute(route: string) {
    return this.router.url.includes(route);
  }

 

}
