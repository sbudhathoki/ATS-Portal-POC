import { Injectable } from '@angular/core';
import { Question } from './question';
import { HttpClient } from '@angular/common/http'; //for web api, not currently in use

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  id = 1;
  answerList = [];
  apiUrl = 'http://localhost:4200' //for web api, not currently in use

  qns: any[];
  seconds: number;
  timer;
  qnProgress: number;
  
  // constructor(private http: HttpClient) {} //for web api, not currently in use


  
  questions = [
    { questionId: 1,
      question: "Our leaders spend most of their energy:",
      categoryCode: 1,
      answers: [
      { answerId: 1, answer: "Managing separate, but related goals", score: 3 },
      { answerId: 2, answer: "Arousing hopes, aspirations, and expectations", score: 7 }
    ]},
    { questionId: 2,
      question: "The primary mission of our leaders is to:",
      categoryCode: 1,
      answers: [
      { answerId: 3, answer: "Maintain stability", score: 3 },
      { answerId: 4, answer: "Create change", score: 7 }
    ]},
    { questionId: 3,
      question: "Our leaders are most concerned:",
      categoryCode: 1,
      answers: [
      { answerId: 5, answer: "That others are rewarded equitably for their work", score: 3 },
      { answerId: 6, answer: "About what others want in life", score: 7 }
    ]},
    { questionId: 4,
      question: "Our leaders are primarily:",
      categoryCode: 1,
      answers: [
      { answerId: 7, answer: "Teachers", score: 3 },
      { answerId: 8, answer: "Facilitators", score: 7 }
    ]},
    { questionId: 5,
      question: "Our leaders enjoy:",
      categoryCode: 1,
      answers: [
      { answerId: 9, answer: "Rewarding others for a job well done", score: 3 },
      { answerId: 10, answer: "Stimulating others to want to do", score: 7 }
    ]},
    { questionId: 6,
      question: "Our leaders’ ability to influence others comes primarily from their:",
      categoryCode: 1,
      answers: [
      { answerId: 9, answer: "Status and position in the organization", score: 3 },
      { answerId: 10, answer: "Ability to get people to identify with them and their ideas", score: 7 }
    ]},
  ];

  // getQuestions() {
  //   return this.http.get(this.apiUrl + '/questions');
  // }

  // record(answer) {
  //   this.answerList.push({ question: this.questions[this.questionId].question, answer });
  // }

  // displayTimeElapsed() {
  //   return Math.floor(this.seconds / 3600) + ':' + Math.floor(this.seconds / 60) + ':' + Math.floor(this.seconds % 60);  
  // }


  getQuestions(): Question[] {
    return this.questions;
  }
  
  get getQuestion(): Question {
    return this.questions.filter(question => (question.questionId === this.id))[0];
  }

  numberOfQuestions() {
    return this.questions.length;
  }

  getQuestionId() {
    return this.id;
  }

  setQuestionId(id: number) {
    return this.id = id;
  }

  isThereAnotherQuestion(): boolean {
    return this.id < this.numberOfQuestions();
  } 

  nextQuestion(): void {
    this.id++;
  }

  prevQuestion(): void {
    this.id--;
  }
}
