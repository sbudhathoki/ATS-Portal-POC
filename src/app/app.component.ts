import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig} from '@angular/material';
import { CookieDialogComponent } from './cookie-dialog/cookie-dialog.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{


  constructor(public router: Router,
    private dialog: MatDialog) { 

      this.showDialog();  
     }

     @ViewChild(CookieDialogComponent)

     showDialog() {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = false;
      dialogConfig.autoFocus = false;
      dialogConfig.width = "150%";
      dialogConfig.position = {
        'bottom': '0',
       
    };
      this.dialog.open(CookieDialogComponent, dialogConfig);
    }
}
  


