import "./question-to-edit.scss";
import { Button } from "../button/buttons";
import { useContext, useEffect, useState } from "react";
import { QuestionsContext } from "../../questions-context";
import { Form } from "../form/form";
import { Question } from "../../types";

interface Props {
  question: Question;
}

export const QuestionToEdit = ({ question }: Props) => {
  const { setQuestion, removeQuestion, questions } =
    useContext(QuestionsContext);
  const [questionEdited, setQuestionEdited] = useState<Question>(question);

  useEffect(() => {
    setQuestionEdited(question);
  }, [question]);

  function onChangeAnswer(
    e: React.ChangeEvent<HTMLInputElement>,
    answer: string
  ) {
    setQuestionEdited({
      ...questionEdited,
      [answer]: e.target.value,
    });
  }

  function onClickEdit() {
    setQuestion(questionEdited.id, questionEdited);
  }

  return (
    <div className="singleQuestionEditContainer">
      <div className="editPageShowQuestionContainer">
        <h2>{question.question}</h2>
        <div className="showAnswersContainerEditPage">
          <div className="showAnswerContainerEditPage">
            <span>A</span>
            <p>{question.a}</p>
          </div>
          <div className="showAnswerContainerEditPage">
            <span>B</span>
            <p>{question.b}</p>
          </div>
          <div className="showAnswerContainerEditPage">
            <span>C</span>
            <p>{question.c}</p>
          </div>
          <div className="showAnswerContainerEditPage">
            <span>D</span>
            <p>{question.d}</p>
          </div>
        </div>
        <span className="showRightAnswer">
          <strong>Right Answer:</strong> {question.rightAnswer}
        </span>
      </div>
      <div className="editPageInputsContainer">
        <h1>Edit the question</h1>
        <Form onChange={onChangeAnswer} value={questionEdited} />
        <div className="EditPageQuestionButtonsContainer">
          <Button onClick={onClickEdit} extraClass="editSingleQuestionButton">
            Edit
          </Button>
          {questions.length !== 1 && (
            <Button
              onClick={() => removeQuestion(question.id)}
              extraClass="editSingleQuestionButton"
            >
              Delete
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
