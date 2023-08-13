import { ReactNode } from "react";
import { BsCheckLg, BsXLg } from "react-icons/bs";
import "./Alert.css";

interface Props {
  children: ReactNode;
  color?: "success" | "danger";
  onDismiss: () => void;
}

const Alert = ({ children, color = "success", onDismiss }: Props) => {
  return (
    <>
      <div className={"alert " + color}>
        <div className="alert-body">
          <div className={"alert-circle-" + color}>
            {color === "success" ? (
              <BsCheckLg size="24" strokeWidth="1px" color="#f9fafb" />
            ) : (
              <BsXLg size="18" strokeWidth="1.5px" color="#f9fafb" />
            )}
          </div>
          <div className="alert-wrapper">
            {color === "success" ? (
              <h1 className="alert-heading">Success!</h1>
            ) : (
              <h1 className="alert-heading">Something went wrong!</h1>
            )}
            <p className="alert-text">{children}</p>
          </div>
        </div>
        <div className="alert-circle">
          <BsXLg
            size="18"
            strokeWidth="1px"
            color="#070c15"
            onClick={onDismiss}
          />
        </div>
      </div>
    </>
  );
};

export default Alert;
