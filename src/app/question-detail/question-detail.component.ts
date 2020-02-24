import { Component, OnInit, SimpleChanges, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Question } from '../question';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.css']
})
export class QuestionDetailComponent implements OnInit {
<<<<<<< HEAD
  @Input() question: Question;
  @Input() numberOfQuestions: number;
  @Output() answer = new EventEmitter<any>();
  @Output() questionForm: FormGroup;
  
  validationMessage: "Please select an answer."
  selectedAnswer = '';
=======
  @Input() numberOfQuestions: number;
  @Output() answer = new EventEmitter<string>();
  @Input() question: Question;
  questionForm: FormGroup;
  
  validationMessage: "Please select an answer."
  paramSub: Subscription;
 
  currentQuestion = 0;

  progressValue: number;
>>>>>>> a8b9a86ed655194a42f5aacf92bab6d669c4623c

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();  
<<<<<<< HEAD
  }

  createForm(){
    this.questionForm = new FormGroup({
      answer: new FormControl(['', Validators.required])
    });
=======
>>>>>>> a8b9a86ed655194a42f5aacf92bab6d669c4623c
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

  initialState(): boolean {
    return this.question.selectedAnswer === '';
  }

  // onValueChanges(): void {
  //   this.questionForm.valueChanges.subscribe(value => console.log(value));
  // }
<<<<<<< HEAD
  
=======


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

>>>>>>> a8b9a86ed655194a42f5aacf92bab6d669c4623c
}
