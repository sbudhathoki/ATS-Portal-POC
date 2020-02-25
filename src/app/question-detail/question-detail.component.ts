import { Component, OnInit, SimpleChanges, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
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
  @Output() questionForm: FormGroup;
  
  validationMessage: "Please select an answer."
  selectedAnswer = '';

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();  
  }

  createForm(){
    this.questionForm = new FormGroup({
      answer: new FormControl(['', Validators.required])
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.question && changes.question.currentValue && !changes.question.firstChange) {
      this.questionForm.patchValue({answer: ''});
      console.log(this.questionForm.value);
    }
  }

  radioChange(answer: any) {
    this.selectedAnswer = answer;
    this.answer.emit(answer);
    console.log(answer);
  }

  // initialState(): boolean {
  //   return this.question.selectedAnswer === '';
  // }

  // onValueChanges(): void {
  //   this.questionForm.valueChanges.subscribe(value => console.log(value));
  // }
  
}
