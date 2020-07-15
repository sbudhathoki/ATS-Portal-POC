import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit {
  //The component serves as a placeholder for future enhancements. It currently displays within the homepage (Home component).
  quoteList: any[] = [
    { quote: "TEKsystems Global Services continues to be one of our best partners for IT services. They provide high-quality services in a flexible, customer-centric framework. A key critical success factor is the time the account team invests in understanding our business and related needs.",
      speaker: "Vice President",
      company: "Vision Insurance Provider"},
    { quote: "Best-in-class...They not only allowed us to meet our project goals, but surpass them through their expertise.",
      speaker: "Manager",
      company: "Connectivity User Experience, Global Consumer Design"},
    { quote: "TEKsystems consistently brings solid candidates to a variety of roles and provides insight and advice beyond just talent acquisition.",
      speaker: "IT Manager",
      company: "Home Security Company"}  
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
