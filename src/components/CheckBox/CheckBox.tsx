import React from "react";
import "./CheckBox.css";

interface Props {
  text: string;
  checked: boolean;
  onChange: (isChecked: boolean, text: string) => void;
}

const CheckBox = ({ text, checked, onChange }: Props) => {
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
            checked={checked}
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
