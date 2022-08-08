import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/header/header";
import "./App.css";
import { Trivia } from "./components/trivia/trivia";
import { Index } from "./pages/index/index";
import { Edit } from "./pages/edit/edit";
import { QuestionsContext } from "./questions-context";
import { getQuestions } from "./methods/methods";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
import { Question } from "./types";

function App() {
  const [questions, setQuestionsLocal] = useState<Question[]>(getQuestions());

  useEffect(() => {
    window.localStorage.setItem("questions", JSON.stringify(questions));
  }, [questions]);

  function setQuestions(questions: Question[]) {
    setQuestionsLocal(questions);
  }

  function setQuestion(id: string | number, newQuestion: Question) {
    setQuestions(
      questions.map((question) => {
        if (id === question.id) {
          return newQuestion;
        }
        return question;
      })
    );
  }

  function removeQuestion(id: string | number) {
    if (questions.length === 1) {
      return;
    }

    setQuestions(
      questions.filter((question) => {
        return question.id !== id;
      })
    );
  }

  function createQuestion(newQuestion: Question) {
    setQuestions([
      ...questions,
      {
        ...newQuestion,
        id: uuidv4(),
      },
    ]);
  }

  return (
    <QuestionsContext.Provider
      value={{
        questions,
        setQuestions,
        setQuestion,
        removeQuestion,
        createQuestion,
      }}
    >
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Index />}></Route>
          <Route path="/trivia" element={<Trivia />}></Route>
          <Route path="/edit" element={<Edit />}></Route>
        </Routes>
      </BrowserRouter>
    </QuestionsContext.Provider>
  );
}

export default App;
