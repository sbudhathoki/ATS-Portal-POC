<<<<<<< HEAD
import { Component, OnInit, Input, Output } from '@angular/core';
import { QuestionService } from '../question.service';
import { Question } from '../question';
import { Subscription } from 'rxjs';
import { ParamMap, ActivatedRoute, Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
=======
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

import { QuestionService } from '../question.service';
import { Question } from '../question';
import { Subscription } from 'rxjs';
>>>>>>> a8b9a86ed655194a42f5aacf92bab6d669c4623c

@Component({
  selector: 'app-question-master',
  templateUrl: './question-master.component.html',
  styleUrls: ['./question-master.component.css']
})
export class QuestionMasterComponent implements OnInit {
<<<<<<< HEAD
  questions: Question[] = [];
  question: Question;
  numberOfQuestions = 0;

  //Subscriptions
  questionSub: Subscription;
  paramSub: Subscription;
  questionByIdSub: Subscription;

  //Progress bar
  progressValue = 0;
  currentQuestion = 0;

  constructor(private questionService: QuestionService,
=======
  question: Question;
  paramSub: Subscription;
 
  numberOfQuestions = 0;
  currentQuestion = 0;

  progressValue: number;

  constructor(public questionService: QuestionService,
>>>>>>> a8b9a86ed655194a42f5aacf92bab6d669c4623c
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
<<<<<<< HEAD
    this.getAllQuestions();

    this.paramSub = this.route.paramMap.subscribe(
      (paramMap: ParamMap) => {
        console.log("paramMap questionId: " + paramMap.get('questionId'));
        const questionId = +paramMap.get('questionId');
        this.getQuestionById(questionId);
        console.log("received question: ", questionId);
      });
  }

  ngOnDestroy() {
    if(this.questionSub) {
      this.questionSub.unsubscribe();
    }
    if(this.paramSub) {
      this.paramSub.unsubscribe();
    }
    if(this.questionByIdSub) {
      this.questionByIdSub.unsubscribe();
    }
  }

  getAllQuestions() {
    this.questionSub = this.questionService.getQuestionsFromServer()
      .subscribe(
        (response: Question[]) => {
          console.log("response: ", response);
          this.questions = response;
          this.numberOfQuestions = this.questions.length;
          console.log("total questions: " + this.numberOfQuestions)
          this.progressValue = 100 * (this.currentQuestion + 1) / this.numberOfQuestions;
        },
        err => {
          console.log("error: " + err)
        }
      )
  }

  getQuestionById(questionId: number) {
    this.questionByIdSub = this.questionService.getQuestionByIdFromServer(questionId)
      .subscribe(
        (response: Question) => {
          console.log ("response: ", response);
          this.question = response;
        },
        err => {
          console.log("error: " + err)
        }
      )
  }

  answer(value) {
    console.log(value)
  }

  isThereAnotherQuestion(): boolean {
    return this.question.questionId < this.numberOfQuestions;
  } 

  nextQuestion() {
    if (this.isThereAnotherQuestion()) {
      this.router.navigate(['/question', this.question.questionId + 1 ]);
    }
    this.increaseProgressValue();
  }

  prevQuestion() {
     this.router.navigate(['/question', this.question.questionId - 1 ]);
  }

  increaseProgressValue() {
    this.progressValue = parseFloat((100 * (this.question.questionId + 1) / this.numberOfQuestions).toFixed(1));
  }

  onSubmit() {
    // console.log(this.questionForm.value);
    // if (this.questionForm.valid){
      this.router.navigate(['/result']);
    // }
  }
}
=======
    // this.questionService.seconds = 0;
    // this.questionService.qnProgress = 0;
    // this.questionService.getQuestions();
    // this.startTimer();

    this.paramSub = this.route.paramMap.subscribe(
      (params: ParamMap) => {
        console.log('paramMap questionId', params.get('questionId'));
        this.questionService.setQuestionId(+params.get('questionId'));

      this.question = this.questionService.getQuestion; // Set the current question to be displayed and create a form group.
                });  
      this.numberOfQuestions = this.questionService.numberOfQuestions();
      this.progressValue = 100 * (this.currentQuestion + 1) / this.numberOfQuestions;

  }

  // startTimer() {
  //   this.questionService.timer = setInterval(() => {
  //     this.questionService.seconds++;
  //   }, 1000);
  // }

  answer(value) {
    console.log(value); 
  }

  nextQuestion() {
    if (this.questionService.isThereAnotherQuestion()) {
      this.router.navigate(['/question', this.questionService.getQuestionId() + 1 ]);
    }
    this.increaseProgressValue();
  }

  prevQuestion() {
     this.router.navigate(['/question', this.questionService.getQuestionId() - 1 ]);
  }

  increaseProgressValue() {
    this.progressValue = parseFloat((100 * (this.questionService.getQuestionId() + 1) / this.numberOfQuestions).toFixed(1));
  }

  // onSubmit() {
  //   console.log(this.questionForm.value);
  //   if (this.questionForm.valid){
  //     this.router.navigate(['/result']);
  //   }
  // }

  onSubmit() {
      this.router.navigate(['/result']);
    }
  }
>>>>>>> a8b9a86ed655194a42f5aacf92bab6d669c4623c
