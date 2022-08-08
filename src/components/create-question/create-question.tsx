import { useContext, useState } from "react";
import { Form } from "../form/form";
import { QuestionsContext } from "../../questions-context";
import "./create-question.scss";
import { Button } from "../button/buttons";
import { Question } from "../../types";
import { v4 as uuidv4 } from "uuid";

const DEFAULT_VALUE = {
  question: "",
  a: "",
  b: "",
  c: "",
  d: "",
  rightAnswer: "",
};

export const CreateQuestion = () => {
  const { createQuestion } = useContext(QuestionsContext);
  const [newQuestion, setNewQuestion] = useState<Question>({
    ...DEFAULT_VALUE,
    id: uuidv4(),
  });

  function onChange(e: React.ChangeEvent<HTMLInputElement>, field: string) {
    if (e.target.value === undefined) {
      return;
    }

    setNewQuestion({
      ...newQuestion,
      [field]: e.target.value,
    });
  }

  function onClickCreate() {
    createQuestion(newQuestion);
    setNewQuestion({
      ...DEFAULT_VALUE,
      id: uuidv4(),
    });
  }

  return (
    <div className="createQuestionContainer">
      <h1>Crea tu pregunta</h1>
      <Form onChange={onChange} value={newQuestion} />
      <div>
        <Button onClick={onClickCreate}>Crear Pregunta</Button>
      </div>
    </div>
  );
};
