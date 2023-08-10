import { ReactNode } from "react";
import "./Button.css";

interface Props {
  children: ReactNode;
  color?: "primary" | "secondary";
  disabled?: boolean;
  onClick: () => void;
}

const Button = ({
  children,
  color = "primary",
  disabled = false,
  onClick,
}: Props) => {
  return (
    <button
      className={"btn btn-" + color}
      type="button"
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
