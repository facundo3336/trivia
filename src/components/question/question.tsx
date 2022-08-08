import { Question } from "../../types";
import "./question.scss";

interface Props {
  question: string;
  numberOfQuestion: number;
  totalQuestions: number;
}

export const ActualQuestion = ({
  question,
  numberOfQuestion,
  totalQuestions,
}: Props) => {
  return (
    <div className="questionContainer">
      <div className="numberOfQuestionContainer">
        <span>
          Pregunta {numberOfQuestion}/{totalQuestions}
        </span>
      </div>
      <span className="questionText">{question}</span>
    </div>
  );
};
