import { Question } from "../../types";
import "./form.scss";

interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>, field: string) => void;
  value: Question;
}

export const Form = ({ onChange, value }: Props) => {
  return (
    <div>
      <div className="editPageLabelsInputsContainerFlex">
        <div className="editPageLabelContainer">
          <label>Question:</label>
          <label>Answer A:</label>
          <label>Answer B:</label>
          <label>Answer C:</label>
          <label>Answer D:</label>
          <label>Right Answer:</label>
        </div>
        <div className="editPageInputContainer">
          <input
            value={value.question}
            onChange={(e) => {
              onChange(e, "question");
            }}
            type="text"
          />
          <input
            value={value.a}
            onChange={(e) => {
              onChange(e, "a");
            }}
            type="text"
          />
          <input
            value={value.b}
            onChange={(e) => {
              onChange(e, "b");
            }}
            type="text"
          />
          <input
            value={value.c}
            onChange={(e) => {
              onChange(e, "c");
            }}
            type="text"
          />
          <input
            value={value.d}
            onChange={(e) => {
              onChange(e, "d");
            }}
            type="text"
          />
          <input
            value={value.rightAnswer}
            onChange={(e) => {
              onChange(e, "rightAnswer");
            }}
            type="text"
          />
        </div>
      </div>
    </div>
  );
};
