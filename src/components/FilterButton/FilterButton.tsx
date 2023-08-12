import { BsFilter } from "react-icons/bs";
import "./FilterButton.css";
import { useState } from "react";

interface Props {
  onClick: () => void;
}

const FilterButton = ({ onClick }: Props) => {
  const [panelOpen, setPanelOpen] = useState(false);

  return (
    <>
      <div className="filters-button">
        <BsFilter
          size="24"
          strokeWidth="1px"
          color="#15273C"
          onClick={() => setPanelOpen(!panelOpen)}
        />
      </div>
      <div className={panelOpen ? "side-panel visible" : "side-panel"}>
        SidePanel here
      </div>
    </>
  );
};

export default FilterButton;
