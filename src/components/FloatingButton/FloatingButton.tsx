import { ReactNode } from "react";
import "./FloatingButton.css";

interface Props {
  children: ReactNode;
  color?: "normal" | "transparent";
}

const FloatingButton = ({ children, color = "normal" }: Props) => {
  return <div className={"fab " + "fab-" + color}>{children}</div>;
};

export default FloatingButton;
