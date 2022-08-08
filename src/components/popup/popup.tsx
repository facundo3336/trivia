import { Button } from "../button/buttons";
import "./popup.scss";

interface Props {
  rightAnswers: number;
  onClickReset: () => void;
  time: number;
}

export const Popup = ({ rightAnswers, onClickReset, time }: Props) => {
  return (
    <div className="popup">
      <div className="popupContent">
        <div className="congratulationPopupContainer">
          <span>Felicitaciones!</span>
        </div>
        <div className="popupText">
          <span>Has completado la trivia</span>
          <p>
            Contestaste <strong>{rightAnswers}</strong> de <strong>8</strong>{" "}
            preguntas correctamente en {time}
          </p>
          <Button onClick={onClickReset}>Reiniciar</Button>
        </div>
      </div>
    </div>
  );
};
