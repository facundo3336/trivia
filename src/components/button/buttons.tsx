import "./button.scss";

interface Props {
  children: React.ReactNode;
  extraClass?: string;
  onClick?: (e: React.MouseEvent) => void;
  color?: string;
}

export const Button = ({ children, extraClass, onClick, color }: Props) => {
  return (
    <button onClick={onClick} className={`button ${extraClass} ${color}`}>
      {children}
    </button>
  );
};
