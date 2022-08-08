import "./header.scss";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <Link to="/">Trivia</Link>
    </header>
  );
};
