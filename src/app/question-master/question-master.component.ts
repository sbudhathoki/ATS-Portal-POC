import { Component, OnInit, ViewChild } from '@angular/core';
import { QuestionService } from '../question.service';
import { Question } from '../question';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { MatDialog, MatDialogConfig} from '@angular/material';
import { InstructionDialogComponent } from '../instruction-dialog/instruction-dialog.component';

@Component({
  selector: 'app-question-master',
  templateUrl: './question-master.component.html',
  styleUrls: ['./question-master.component.css']
})
export class QuestionMasterComponent implements OnInit {
  questions: Question[];
  questionToDisplay: Question;

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
  selectedAnswer: number;

  constructor(private questionService: QuestionService,
              private dataService: DataService,
              private router: Router,
              private dialog: MatDialog) { 
               this.showDialog();  
              }

  @ViewChild(InstructionDialogComponent)

  ngOnInit() {
    this.dataService.currentCompany.subscribe(company => this.companyName = company);
    this.getAllQuestions();
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
        error => {
          console.error("error: " + error)
        });
  }

  ngOnDestroy() {
    if (this.questionSub) {
      this.questionSub.unsubscribe();
    }
  }

  showDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = false;
    dialogConfig.width = "50%";
    this.dialog.open(InstructionDialogComponent, dialogConfig);
  }

  getAnswer(answer) {
      answer = { 
        questionId: this.questionToDisplay.questionId, 
        answerId: answer.answerId
      }
      var newAnswer = Object.assign({}, answer);
      this.answers.push(newAnswer);
      this.answers = Object.values(this.answers.reduce((acc,cur)=>Object.assign(acc,{[cur.questionId]:cur}),{}));
  }

  nextQuestion(): void {
    this.questionToDisplay = this.questions[this.index];
    this.index++;
    this.increaseProgressValue();
  }

  previousQuestion(): void {
    if (this.index > 1){
      this.index--;
      this.questionToDisplay = this.questions[this.index - 1];
    };
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
