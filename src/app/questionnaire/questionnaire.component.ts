import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'
import { QuestionService } from '../question.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {
  question;
  validationMessage: string = "Please choose a response."
  formSubmitted: boolean = false;
  questionForm: FormGroup;

  constructor(public questionService: QuestionService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder) { 
       // this.route.paramMap.subscribe(params => {
                // this.setQuestionId(+params.get('questionId'));  // get the question ID and store it
                // this.question = this.getQuestion;
                // });
    

                
                this.route.paramMap.subscribe(params => {
                this.questionService.questionId = +params.get('questionId'); // Get the question ID and store it. 
                this.question = this.questionService.questions[this.questionService.questionId]; // Set the current question to be displayed and create a form group.
                    this.questionForm = this.fb.group({
                    answer: ''
                  });
                  console.log(this.questionService.answerList)
                });
    }

  ngOnInit() {
    this.questionService.seconds = 0;
    this.questionService.qnProgress = 0;
    this.questionService.questions;
    this.startTimer();

  }

  startTimer() {
    this.questionService.timer = setInterval(() => {
      this.questionService.seconds++;
    }, 1000);
  }

  // Answer(questionId, choice){
  //   this.questionService.qns[this.questionService.qnProgress].answer = choice;
  //   localStorage.setItem('qns', JSON.stringify(this.questionService.qns));
  //   this.questionService.qnProgress++;
  //   localStorage.setItem('qnProgress', this.questionService.qnProgress.toString());
  //   if (this.questionService.qnProgress == 10) {
  //     clearInterval(this.questionService.timer);
  //     this.router.navigate(['/home']);
  //   }
  // }

  // onSubmit() {
  //   this.formSubmitted = true;
  //   this.surveyForm.reset();
  // }

  // onValueChanges(): void {
  //   this.surveyForm.valueChanges.subscribe(value => console.log(value));
  // }

  // getQuestionId() {
  //   return this.questionId;
  // }

  // setQuestionId(id: number) {
  //   return this.questionId = id;
  // }

  // get getQuestion(): Question {
  //   return this.questionService.questions.filter(
  //     question => question.questionId === this.questionId
  //   )[0];
  // }
}
