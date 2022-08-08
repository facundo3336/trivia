import React from "react";
import { Question } from "./types";

interface IQuestionsContext {
  questions: Question[];
  setQuestions: (questions: Question[]) => void;
  setQuestion: (id: string, newQuestion: Question) => void;
  removeQuestion: (id: string) => void;
  createQuestion: (newQuestion: Question) => void;
}

export const QuestionsContext = React.createContext({} as IQuestionsContext);
