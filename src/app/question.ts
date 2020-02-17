import { Answer } from './answer';
import { Category } from './category';

export interface Question {
    questionId: number;
    question: string;
    category: Category;
    answers: Answer[];
    selectedAnswer: string;
}
