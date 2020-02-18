import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

import { QuestionService } from '../question.service';
import { Question } from '../question';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-question-master',
  templateUrl: './question-master.component.html',
  styleUrls: ['./question-master.component.css']
})
export class QuestionMasterComponent implements OnInit {
  question: Question;
  paramSub: Subscription;
 
  numberOfQuestions = 0;
  currentQuestion = 0;

  progressValue: number;

  constructor(public questionService: QuestionService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
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
