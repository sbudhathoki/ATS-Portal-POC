import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-instruction-dialog',
  templateUrl: './instruction-dialog.component.html',
  styleUrls: ['./instruction-dialog.component.css']
})
export class InstructionDialogComponent implements OnInit {

  constructor(public dialog: MatDialogRef<InstructionDialogComponent>) { }

  ngOnInit(): void {
  }

//This dialog opens upon initiating the question-master component. 
//Users can click anywhere on the screen to close it.
  onClose(){
    this.dialog.close();
  }

}
