import { ReactNode } from "react";
import styles from "./Button.module.css";

interface Props {
  children: ReactNode;
  color?: "Primary" | "Secondary";
  disabled?: boolean;
}

const Button = ({ children, color = "Primary", disabled = false }: Props) => {
  return (
    <button
      type="button"
      disabled={disabled}
      className={[styles.btn, styles["btn" + color]].join(" ")}
    >
      {children}
    </button>
  );
};

export default Button;
