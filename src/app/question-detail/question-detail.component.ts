import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { QuestionService } from '../question.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.css']
})
export class QuestionDetailComponent implements OnInit {
  paramSub: Subscription;
  question;
  questionForm: FormGroup;

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
                    this.questionForm = this.fb.group({
                    answer: ['']
                  });
                });
  }

  nextQuestion() {
    if (this.questionService.isThereAnotherQuestion()) {
      this.router.navigate(['/question', this.questionService.getQuestionId() + 1 ]);
    }
  }

  prevQuestion() {
     this.router.navigate(['/question', this.questionService.getQuestionId() - 1 ]);
  }

  showResults() {
    this.router.navigate(['/answers']);
  }

}
