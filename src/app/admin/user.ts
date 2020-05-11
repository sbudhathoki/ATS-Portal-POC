export interface User {
    companyId: number;
    companyName: string;
    industry: string;
    firstName: string;
    lastName: string;
    title: string;
    email: string;
    phoneNumber: string;
    questions: [
        { 
        questionId: number;
        question: string;
        categoryCode: string;
        answers: [
            {
            answerId: number;
            answer: string;
            score: number 
                }
            ]
        }
    ];
    companyHtmlPdfPath?: {
        companyId?: number;
        reportHtmlPath?: string;
        pdfHtmlPath?: string;
        pdfPath?: string;
        companyName?: string;
        reportType?: string;
        reportCreationDate?: string;
        companyHtmlPdfPathId?: number;
    }
}