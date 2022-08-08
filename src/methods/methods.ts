import { DEFAULT_QUESTIONS } from "../data/data";

export function getQuestions() {
  const questions = window.localStorage.getItem("questions");

  if (!questions) {
    return DEFAULT_QUESTIONS;
  }

  return JSON.parse(questions);
}

export function deleteQuestions() {
  return window.localStorage.removeItem("questions");
}
