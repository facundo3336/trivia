import "./index.scss";
import { Button } from "../../components/button/buttons";
import { Link } from "react-router-dom";

export const Index = () => {
  return (
    <div className="index">
      <Link to="/trivia">
        <Button color="lightBlue">Default Trivia</Button>
      </Link>
      <Link to="/edit">
        <Button color="lightBlue">Edit Trivia</Button>
      </Link>
    </div>
  );
};
