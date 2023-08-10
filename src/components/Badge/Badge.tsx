import { ReactNode } from "react";
import "./Badge.css";

interface Props {
  children: ReactNode;
  color?: "rating" | "danger";
}

const Badge = ({ children, color = "danger" }: Props) => {
  return <div className={"row badge-" + color}>{children}</div>;
};

export default Badge;
