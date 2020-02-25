import { Component, OnInit } from '@angular/core';
import { ResultService } from '../result.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(private resultService: ResultService) {}

  ngOnInit() {
    this.getPdf;
  } 

  getPdf() {
    this.resultService.getPdfFromServer()
      .subscribe(
        (response: any) => {
          console.log("response: ", response);
        },
        err => {
          console.log("error: " + err)
        }
      )
  }
}
