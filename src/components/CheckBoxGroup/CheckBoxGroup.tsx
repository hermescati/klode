import { useState } from "react";
import CheckBox from "../CheckBox";
import "./CheckBoxGroup.css";

interface Props {
  items: any[];
  checkedItems: string[];
  onChange: (isChecked: boolean, text: any) => void;
}

const CheckBoxGroup = ({ items, checkedItems, onChange }: Props) => {
  const initialCount = 6;
  const [itemCount, setItemCount] = useState(initialCount);
  const [showAll, setShowAll] = useState(false);

  const toggleDisplay = () => {
    if (showAll) {
      setItemCount(6);
    } else {
      setItemCount(items.length);
    }
    setShowAll(!showAll);
  };

  return (
    <>
      <div className="group-container">
        <div className="checkbox-group">
          {items.slice(0, itemCount).map((item) => (
            <CheckBox
              key={item}
              text={item}
              checked={checkedItems.includes(item)}
              onChange={onChange}
            />
          ))}
        </div>
        {items.length > initialCount && (
          <span className="group-button" onClick={toggleDisplay}>
            {showAll ? "View less" : "View more"}
          </span>
        )}
      </div>
    </>
  );
};

export default CheckBoxGroup;
