import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-cookie-dialog',
  templateUrl: './cookie-dialog.component.html',
  styleUrls: ['./cookie-dialog.component.css']
})
export class CookieDialogComponent implements OnInit {

  constructor(public dialog: MatDialogRef<CookieDialogComponent>) { 
      dialog.disableClose = true;
  }

  ngOnInit(): void {
  }

//Users can click anywhere on the screen to close it.
  onClose(){
    this.dialog.close();
  }

}
