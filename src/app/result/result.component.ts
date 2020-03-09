import { Component, OnInit } from '@angular/core';
import { ResultService } from '../result.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  html = '';

  constructor(private resultService: ResultService) { }

  ngOnInit(): void {
    this.getHTML();
  }

  getHTML() {
    this.resultService.getHTMLFromServer()
      .subscribe(
        (response: any) => {
          this.html = response;
          console.log (this.html);
        },
        err => { console.log("error: " + err.message);
        });
  }

  // showPdf(): void {
  //   this.resultService.getPdf()
  //   .subscribe(x => {
  //     var newBlob = new Blob([x], { type: 'application/pdf' });
      
  //     if (window.navigator && window.navigator.msSaveOrOpenBlob) {
  //       window.navigator.msSaveOrOpenBlob(newBlob);
  //       return;
  //   }

  //   const data = window.URL.createObjectURL(newBlob);

  //   var link = document.createElement('a');
  //   link.href = data;
  //   // link.download = //add name of the pdf

  //   link.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));

  //   setTimeout(function () {
  //     window.URL.revokeObjectURL(data);
  //     link.remove();
  //   }, 100);
  //   });
  // }
}
