import { useContext } from "react";
import { Link } from "react-router-dom";
import { QuestionToEdit } from "../../components/question-to-edit/question-to-edit";
import { deleteQuestions, getQuestions } from "../../methods/methods";
import { Button } from "../../components/button/buttons";
import { QuestionsContext } from "../../questions-context";
import "./edit.scss";
import { CreateQuestion } from "../../components/create-question/create-question";
import { Questions } from "../../types";

export const Edit = () => {
  const { questions, setQuestions } = useContext(QuestionsContext);

  function onClickRestore() {
    deleteQuestions();
    setQuestions(getQuestions());
  }

  return (
    <div>
      <div className="deleteAllQuestionButtonContainer">
        <Button onClick={onClickRestore} extraClass="deleteAllQuestionButton">
          Restore Default Questions
        </Button>
      </div>
      <CreateQuestion />
      {questions !== undefined &&
        questions.map((question) => {
          return <QuestionToEdit key={question.id} question={question} />;
        })}
      <div className="deleteAllQuestionButtonContainer">
        <Link to="/trivia">
          <Button extraClass="deleteAllQuestionButton">Ready to use</Button>
        </Link>
      </div>
    </div>
  );
};
