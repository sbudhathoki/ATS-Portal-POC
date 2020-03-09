import { Component, OnInit, Input } from '@angular/core';
import { QuestionService } from '../question.service';
import { Question } from '../question';
import { Subscription } from 'rxjs';
import { ParamMap, ActivatedRoute, Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-question-master',
  templateUrl: './question-master.component.html',
  styleUrls: ['./question-master.component.css']
})
export class QuestionMasterComponent implements OnInit {
questions: Question[] = [];
@Input() questionForm = FormGroup; //added form

  question: Question;
  questionId: number;
  numberOfQuestions = 0;
  answers = [];

  //Subscriptions
  questionSub: Subscription;
  paramSub: Subscription;
  questionByIdSub: Subscription;
  submitSub: Subscription;

  //Progress bar
  progressValue = 0;
  currentQuestion = 0;

  constructor(private questionService: QuestionService,
              private companyService: CompanyService,
              private route: ActivatedRoute,
              private router: Router) { }

    ngOnInit() {
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
          console.log("total questions: " + this.numberOfQuestions);
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

  answer(answer) {
    this.answers.push({ questionId: this.question.questionId, answerId: answer.answerId });
    console.log("answers: ", this.answers)
    this.answers = this.questionService.getAnswers();
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
    this.submitSub = this.questionService.postQAResponseToServer(this.answers).subscribe(
      (response: any[]) => {
      console.log("response: ", response);
    },
      err => { console.log("error: " + err);
      });
      this.router.navigate(['/acknowledgment']);
  }
}