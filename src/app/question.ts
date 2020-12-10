import { Answer } from './answer';

export class Question {
    questionId: number;
    question: string;
    categoryCode: string;
    answers: Answer[];
    selectedAnswer: number;
}
