import { Component, OnInit } from '@angular/core';
import { ResultService } from '../result.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
})
export class ResultComponent implements OnInit {
  html = '';
  companyName = '';

  constructor(private resultService: ResultService,
              private dataService: DataService) { }

              ngOnInit(): void {
                this.dataService.currentCompany.subscribe(company => this.companyName = company);
            
                this.getHTML();
              }
            
              getHTML() {
                this.resultService.getHTMLFromServer(this.companyName)
                  .subscribe(
                    (res: any) => {
                      this.html = res;
                    },
                    err => { console.log(err);
                    });
              }
            
              showPdf(): void {
                this.resultService.getPdf()
                .subscribe(x => {
                  var newBlob = new Blob([x], { type: 'application/pdf' });
                  if (window.navigator && window.navigator.msSaveOrOpenBlob) {
                    window.navigator.msSaveOrOpenBlob(newBlob);
                    return;
                }
            
                const data = window.URL.createObjectURL(newBlob);
            
                var link = document.createElement('a');
                link.href = data;
                link.download = "Agile_Transformation_Analysis_Report";
            
                link.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
                
                });
              }
}
