import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';
import { Question } from '../question';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-question-master',
  templateUrl: './question-master.component.html',
  styleUrls: ['./question-master.component.css']
})
export class QuestionMasterComponent implements OnInit {
  questions: Question[];
  questionToDisplay: Question;
  questionForm: FormGroup;

  answers = [];
  numberOfQuestions: number;
  index = 1;

  //Subscriptions
  questionSub: Subscription;
  submitSub: Subscription;
  companyName: string = "";
 
  //Progress bar
  progressValue = 0;
  currentQuestion = 0;

  constructor(private questionService: QuestionService,
              private dataService: DataService,
              private router: Router,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.dataService.currentCompany.subscribe(company => this.companyName = company);
    this.getAllQuestions();
    this.buildForm();
  }

  getAllQuestions() {
    this.questionSub = this.questionService.getQuestionsFromServer()
      .subscribe(
        (response: Question[]) => {
          this.questions = response;
          this.questionToDisplay = this.questions[0];
          this.numberOfQuestions = this.questions.length;
          this.progressValue = 100 * (this.currentQuestion + 1) / this.numberOfQuestions;
        },
        err => {
          console.log("error: " + err)
        });
  }

  ngOnDestroy() {
    if (this.questionSub) {
      this.questionSub.unsubscribe();
    }
  }

   buildForm() {
    this.questionForm = this.fb.group({
      answer: ['', Validators.required]
    });
  }

  getAnswer(answer) {
      answer = { questionId: this.questionToDisplay.questionId, answerId: answer.answerId }
      var newAnswer = Object.assign({}, answer);
      this.answers.push(newAnswer);
      this.answers = Object.values(this.answers.reduce((acc,cur)=>Object.assign(acc,{[cur.questionId]:cur}),{}));
  }

  nextQuestion(): void {
    this.questionToDisplay = this.questions[this.index];
    this.index++;
    this.increaseProgressValue();
    this.questionForm.reset();
  }
  
  increaseProgressValue() {
    this.progressValue = 100 * this.index / this.numberOfQuestions;
  }

  submit() {
    this.submitSub = this.questionService.postQAResponseToServer(this.companyName, this.answers).subscribe(
      () => this.router.navigate(['/acknowledgment']),
      err => { console.log(err);
      });
      
  }
}
