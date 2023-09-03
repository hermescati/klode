import { ReactNode, useState } from "react";
import { BsPlus } from "react-icons/bs";
import "./Accordion.css";

interface Props {
  title: string;
  children: ReactNode;
}

const Accordion = ({ title, children }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOnClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="accordion">
        <div className="accordion-header" onClick={handleOnClick}>
          <h3>{title}</h3>
          <div
            className={`accordion-button ${isOpen ? "rotate-icon open" : ""}`}
          >
            <BsPlus />
          </div>
        </div>
        {isOpen && <div>{children}</div>}
      </div>
    </>
  );
};

export default Accordion;
