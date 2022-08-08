export interface Question {
  question: string;
  a: string;
  b: string;
  c: string;
  d: string;
  rightAnswer: string;
  id: string;
}

export interface Questions {
  questions: Questions[];
}
