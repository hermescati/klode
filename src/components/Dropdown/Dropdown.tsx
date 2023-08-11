import React, { useState } from "react";
import "./Dropdown.css";

export interface SelectItem {
  id: number;
  name: string;
}

interface Props {
  defaultText: string;
  items: SelectItem[];
  onSelectItem: (item: SelectItem) => void;
}

const Dropdown = ({ defaultText, items, onSelectItem }: Props) => {
  const [showOptionList, setShowOptionList] = useState(false);
  const [defaultSelectText, setDefaultSelectText] = useState(defaultText);

  const handleClickOutside = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (
      !target.classList.contains("select-option") &&
      !target.classList.contains("select-container")
    ) {
      setShowOptionList(false);
    }
  };

  const handleListDisplay = () => {
    setShowOptionList((prevShowOptionList) => !prevShowOptionList);
  };

  const handleOptionClick = (e: React.MouseEvent<HTMLLIElement>) => {
    const name = e.currentTarget.getAttribute("data-name");
    if (name) {
      setDefaultSelectText(name);
      setShowOptionList(false);

      const selectedItem = items.find((item) => item.name === name);
      if (selectedItem) {
        onSelectItem(selectedItem);
      }
    }
  };

  React.useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="select">
      <div
        className={
          showOptionList ? "select-container expanded" : "select-container"
        }
        onClick={handleListDisplay}
      >
        {defaultSelectText}
      </div>
      {showOptionList && (
        <ul className="options-container">
          {items.map((option) => {
            return (
              <li
                className="select-option"
                data-name={option.name}
                key={option.id}
                onClick={handleOptionClick}
              >
                {option.name}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
