import { Component, OnInit, SimpleChanges, Input, EventEmitter, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { QuestionService } from '../question.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Question } from '../question';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.css']
})
export class QuestionDetailComponent implements OnInit {
  @Input() numberOfQuestions: number;
  @Output() answer = new EventEmitter<string>();
  @Input() question: Question;
  questionForm: FormGroup;
  
  validationMessage: "Please select an answer."
  paramSub: Subscription;
 
  currentQuestion = 0;

  progressValue: number;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();  
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.question && changes.question.currentValue && !changes.question.firstChange) {
      this.questionForm.patchValue({answer: ''});
    }
  }

  radioChange(answer: any) {
    this.question.selectedAnswer = answer;
    this.answer.emit(answer);
    console.log(answer);
  }

  initialState(): boolean {
    return this.question.selectedAnswer === '';
  }

  // onValueChanges(): void {
  //   this.questionForm.valueChanges.subscribe(value => console.log(value));
  // }


  createForm(){
    this.questionForm = this.fb.group({
      answer: new FormControl(['', Validators.required])
    });
  }

  
  // onSubmit() {
  //   console.log(this.questionForm.value);
  //   if (this.questionForm.valid){
  //     this.router.navigate(['/result']);
  //   }
  // }

}
