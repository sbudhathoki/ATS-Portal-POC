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
  @Input() required: Boolean
  @Input() question: Question;
  @Output() answer = new EventEmitter<any>();
  @Output() questionForm: FormGroup;
  
  validationMessage: "Please select an answer."
  paramSub: Subscription;
 
  numberOfQuestions = 0;
  currentQuestion = 0;
  progressValue: number;

  constructor(private route: ActivatedRoute,
              public questionService: QuestionService,
              private fb: FormBuilder,
              private router: Router
              ) { }

  ngOnInit() {
    this.paramSub = this.route.paramMap.subscribe(
      (params: ParamMap) => {
        console.log('paramMap questionId', params.get('questionId'));
        this.questionService.setQuestionId(+params.get('questionId'));

      this.question = this.questionService.getQuestion; // Set the current question to be displayed and create a form group.
                  this.createForm();  
                });  
      this.numberOfQuestions = this.questionService.numberOfQuestions();
      this.progressValue = 100 * (this.currentQuestion + 1) / this.numberOfQuestions;
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

  // onValueChanges(): void {
  //   this.questionForm.valueChanges.subscribe(value => console.log(value));
  // }


  createForm(){
    this.questionForm = this.fb.group({
      answer: ''
    });
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

  onSubmit() {
    console.log(this.questionForm.value);
    if (this.questionForm.valid){
      this.router.navigate(['/result']);
    }
  }

}
