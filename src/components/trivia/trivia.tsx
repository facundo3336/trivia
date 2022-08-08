import { useContext, useState } from "react";
import { ActualQuestion } from "../question/question";
import "./trivia.scss";
import { Answers } from "../answers/answers";
import { Button } from "../button/buttons";
import { Popup } from "../popup/popup";
import { QuestionsContext } from "../../questions-context";

export const Trivia = () => {
  const { questions } = useContext(QuestionsContext);
  const [questionCount, setQuestionCount] = useState(1);
  const [rightAnswersCount, setRightAnswersCount] = useState(0);
  const [popup, setPopup] = useState(false);
  const [actualAnswer, setActualAnswer] = useState<string>();

  function onClickNextQuestion() {
    if (actualAnswer === undefined) {
      return;
    }

    if (questions[questionCount - 1].rightAnswer === actualAnswer) {
      setRightAnswersCount(rightAnswersCount + 1);
    }

    setActualAnswer(undefined);

    setQuestionCount(questionCount + 1);
  }

  function onClickAnswer(answer: string) {
    setActualAnswer(answer);
  }

  function onClickPopup() {
    if (questions[questionCount - 1].rightAnswer === actualAnswer) {
      setRightAnswersCount(rightAnswersCount + 1);
    }
    setPopup(true);
  }

  function onClickResetQuiz() {
    window.location.reload();
  }

  return (
    <div className="trivia">
      <div className="triviaContainer">
        <h1>Quiz!</h1>
        <ActualQuestion
          question={questions[questionCount - 1].question}
          numberOfQuestion={questionCount}
          totalQuestions={questions.length}
        />
        <Answers
          selected={actualAnswer}
          onClickSelected={onClickAnswer}
          answers={questions[questionCount - 1]}
        />
        <div className="nextFinishButtonContainer">
          <Button
            onClick={questionCount === 8 ? onClickPopup : onClickNextQuestion}
            extraClass="nextFinishButton"
          >
            {questionCount === 8 ? "Finish Quiz" : "Next Question"}
          </Button>
        </div>
        {actualAnswer === undefined ? (
          <div className="needAnAnswerContainer">
            <span>Tienes que selecionar una respuesta!</span>
          </div>
        ) : (
          <></>
        )}
      </div>
      {popup && (
        <Popup
          onClickReset={onClickResetQuiz}
          rightAnswers={rightAnswersCount}
          time={20}
        />
      )}
    </div>
  );
};
