import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Question } from '../question';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.css']
})
export class QuestionDetailComponent implements OnInit {
  @Input() question: Question;
  @Input() numberOfQuestions: number;
  @Output() answer = new EventEmitter<any>();
  @Input() questionForm: FormGroup;

  constructor() { }

  ngOnInit() {}

  recordAnswer(answer) {
    this.answer.emit(answer);
  }
}

























// export class QuestionDetailComponent implements OnInit {
//   @Input() question: Question;
//   @Input() numberOfQuestions: number;
//   @Output() answer = new EventEmitter<any>();
//   @Output() questionForm: FormGroup;

//   validationMessage: "Please select an answer."
//   questions: Question[];
//   answers = [];


//   constructor(private fb: FormBuilder) { }

//   ngOnInit() {
//     this.createForm();  
//   }

//   createForm(){
//     this.questionForm = this.fb.group({
//       answer: ['', Validators.required]
//     });
//   }

//   record(answer) {
//     this.answer.emit(answer);
//   }

//   ngOnChanges(changes: SimpleChanges) {
//     if (changes.question && changes.question.currentValue && !changes.question.firstChange) {
//       this.questionForm.patchValue({answer: ''});
//       console.log(this.questionForm.value);
//     }
//   }
// }