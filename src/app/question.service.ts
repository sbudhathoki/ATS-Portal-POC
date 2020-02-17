import { Injectable } from '@angular/core';
import { Question } from './question';
import { HttpClient } from '@angular/common/http'; //for web api, not currently in use

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  id = 1;
  apiUrl = 'http://localhost:4200' //for web api, not currently in use

  qns: any[];
  seconds: number;
  timer;
  qnProgress: number;
  
  // constructor(private http: HttpClient) {} //for web api, not currently in use

  questions = [
    { questionId: 1,
      question: "Our leaders spend most of their energy:",
      category: { categoryId: 1, category: "Leadership Mindset", categoryCode: "I"},
      answers: [
      { answerId: 1, answer: "Managing separate, but related goals", score: 3 },
      { answerId: 2, answer: "Arousing hopes, aspirations, and expectations", score: 7 },
    ], selectedAnswer: ""},
    { questionId: 2,
      question: "The primary mission of our leaders is to:",
      category: { categoryId: 1, category: "Leadership Mindset", categoryCode: "I"},
      answers: [
      { answerId: 3, answer: "Maintain stability", score: 3 },
      { answerId: 4, answer: "Create change", score: 7 }
    ], selectedAnswer: ""},
    { questionId: 3,
      question: "Our leaders are most concerned:",
      category: { categoryId: 1, category: "Leadership Mindset", categoryCode: "I"},
      answers: [
      { answerId: 5, answer: "That others are rewarded equitably for their work", score: 3 },
      { answerId: 6, answer: "About what others want in life", score: 7 }
    ], selectedAnswer: ""},
    { questionId: 4,
      question: "Our leaders are primarily:",
      category: { categoryId: 1, category: "Leadership Mindset", categoryCode: "I"},
      answers: [
      { answerId: 7, answer: "Teachers", score: 3 },
      { answerId: 8, answer: "Facilitators", score: 7 }
    ], selectedAnswer: ""},
    { questionId: 5,
      question: "Our leaders enjoy:",
      category: { categoryId: 1, category: "Leadership Mindset", categoryCode: "I"},
      answers: [
      { answerId: 9, answer: "Rewarding others for a job well done", score: 3 },
      { answerId: 10, answer: "Stimulating others to want to do", score: 7 }
    ], selectedAnswer: ""},
    { questionId: 6,
      question: "Our leaders’ ability to influence others comes primarily from their:",
      category: { categoryId: 1, category: "Leadership Mindset", categoryCode: "I"},
      answers: [
      { answerId: 9, answer: "Status and position in the organization", score: 3 },
      { answerId: 10, answer: "Ability to get people to identify with them and their ideas", score: 7 }
    ], selectedAnswer: ""},
    { questionId: 7,
      question: "Delivery teams are stable with 3-8 team members",
      category: { categoryId: 2, category: "Practices & Behaviors", categoryCode: "IT"},
      answers: [
      { answerId: 11, answer: "Strongly disagree", score: 1 },
      { answerId: 12, answer: "Disagree", score: 2 },
      { answerId: 13, answer: "Neutral / Hard to decide", score: 3},
      { answerId: 14, answer: "Agree", score: 4},
      { answerId: 15, answer: "Strongly Agree", score: 5}
    ], selectedAnswer: ""},
    { questionId: 8,
      question: "Delivery team members work together in a team room",
      category: { categoryId: 2, category: "Practices & Behaviors", categoryCode: "IT"},
      answers: [
      { answerId: 16, answer: "Strongly disagree", score: 1 },
      { answerId: 17, answer: "Disagree", score: 2 },
      { answerId: 18, answer: "Neutral / Hard to decide", score: 3},
      { answerId: 19, answer: "Agree", score: 4},
      { answerId: 20, answer: "Strongly Agree", score: 5}
    ], selectedAnswer: ""},
  ];

  // getQuestions() {
  //   return this.http.get(this.apiUrl + '/questions');
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
