
export interface Topic {
  id: string;
  title: string;
  description: string;
  content: string;
  questions: Question[];
}

export interface Question {
  id: string;
  question: string;
  code?: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}
