import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-question-master',
  templateUrl: './question-master.component.html',
  styleUrls: ['./question-master.component.css']
})
export class QuestionMasterComponent implements OnInit {
  questions = [];
  
  question;
  validationMessage: string = "Please choose a response."
  formSubmitted: boolean = false;
  questionForm: FormGroup;

  constructor(public questionService: QuestionService) { }

  ngOnInit() {
    this.questionService.seconds = 0;
    this.questionService.qnProgress = 0;
    this.questionService.getQuestions();
    this.startTimer();

  }

  startTimer() {
    this.questionService.timer = setInterval(() => {
      this.questionService.seconds++;
    }, 1000);
  }

  // onSubmit() {
  //   this.formSubmitted = true;
  //   this.questionForm.reset();
  // }

  // onValueChanges(): void {
  //   this.questionForm.valueChanges.subscribe(value => console.log(value));
  // }
}
