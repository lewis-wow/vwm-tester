export type Answer = {
  answer: string;
  correct: boolean;
};

export type Question = {
  question: string;
  answers: Answer[];
};
