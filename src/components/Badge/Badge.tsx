import { ReactNode } from "react";
import "./Badge.css";

interface Props {
  children: ReactNode;
  color?: "normal" | "rating" | "danger";
}

const Badge = ({ children, color = "normal" }: Props) => {
  return <div className={"badge-" + color}>{children}</div>;
};

export default Badge;
