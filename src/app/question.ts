import { Answer } from './answer';
// import { Category } from './category';

export interface Question {
    questionId: number;
    question: string;
    categoryCode: number;
    answers: Answer[];
}
