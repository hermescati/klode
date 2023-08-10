import { ReactNode } from "react";
import "./Button.css";

interface Props {
  children: ReactNode;
  color?: "primary" | "secondary";
  disabled?: boolean;
}

const Button = ({ children, color = "primary", disabled = false }: Props) => {
  return (
    <button type="button" disabled={disabled} className={"btn btn-" + color}>
      {children}
    </button>
  );
};

export default Button;
