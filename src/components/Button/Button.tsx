import { ReactNode } from "react";
import "./Button.css";

interface Props {
  children: ReactNode;
  color?: "primary" | "secondary";
  disabled?: boolean;
  size?: "normal" | "small";
  onClick: () => void;
}

const Button = ({
  children,
  color = "primary",
  disabled = false,
  size = "normal",
  onClick,
}: Props) => {
  return (
    <button
      className={"btn btn-" + color + " " + size}
      type="button"
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
