import { Question } from "../../types";
import "./answers.scss";

interface Props {
  answers: Question;
  onClickSelected: (option: string) => void;
  selected?: string;
}

export const Answers = ({ answers, onClickSelected, selected }: Props) => {
  return (
    <div className="answers">
      <div
        className={`answer ${selected === "a" ? "selected" : ""}`}
        onClick={() => {
          onClickSelected("a");
        }}
      >
        <div className="answerLetter">A</div>
        <span className="answerText">{answers.a}</span>
      </div>
      <div
        className={`answer ${selected === "b" ? "selected" : ""}`}
        onClick={() => {
          onClickSelected("b");
        }}
      >
        <div className="answerLetter">B</div>
        <span className="answerText">{answers.b}</span>
      </div>
      <div
        className={`answer ${selected === "c" ? "selected" : ""}`}
        onClick={() => {
          onClickSelected("c");
        }}
      >
        <div className="answerLetter">C</div>
        <span className="answerText">{answers.c}</span>
      </div>
      <div
        className={`answer ${selected === "d" ? "selected" : ""}`}
        onClick={() => {
          onClickSelected("d");
        }}
      >
        <div className="answerLetter">D</div>
        <span className="answerText">{answers.d}</span>
      </div>
    </div>
  );
};
