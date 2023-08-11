import { ReactNode } from "react";
import "./Message.css";

interface Props {
  children: ReactNode;
}

const Message = ({ children }: Props) => {
  return (
    <>
      <div className="message-body">{children}</div>
    </>
  );
};

export default Message;
