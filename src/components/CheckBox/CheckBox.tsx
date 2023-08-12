import React from "react";
import "./CheckBox.css";

interface Props {
  text: string;
  onChange: (isChecked: boolean, text: string) => void;
}

const CheckBox = ({ text, onChange }: Props) => {
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked, text);
  };

  return (
    <>
      <div className="checkbox">
        <label className="checkbox-wrapper">
          <input
            type="checkbox"
            className="checkbox-input"
            onChange={handleOnChange}
          />
          <span className="checkbox-tile">
            <span className="checkbox-label">{text}</span>
          </span>
        </label>
      </div>
    </>
  );
};

export default CheckBox;
