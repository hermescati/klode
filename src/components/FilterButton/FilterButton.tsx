import { BsFilter, BsArrowLeft } from "react-icons/bs";
import "./FilterButton.css";
import { useEffect, useState } from "react";
import Filter from "../Filter";

interface Props {
  onApplyFilters: (
    priceRange: [number, number],
    selectedColors: string[]
  ) => void;
}

const FilterButton = ({ onApplyFilters }: Props) => {
  const [panelOpen, setPanelOpen] = useState(false);

  const handleApplyFilter = (
    priceRange: [number, number],
    selectedColors: string[]
  ) => {
    onApplyFilters(priceRange, selectedColors);
    handlePanelOpen();
  };

  const handlePanelOpen = () => {
    setPanelOpen(!panelOpen);
  };

  const handleClickOutside = () => {
    if (panelOpen) {
      handlePanelOpen();
    }
  };

  return (
    <>
      <div className="filters-button">
        <BsFilter
          size="24"
          strokeWidth="1px"
          color="#15273C"
          onClick={handlePanelOpen}
        />
      </div>
      {panelOpen && (
        <div className="backdrop" onClick={handleClickOutside}></div>
      )}
      <div className={panelOpen ? "side-panel visible" : "side-panel"}>
        <BsArrowLeft
          size="24"
          strokeWidth="1px"
          color="#15273C"
          onClick={handlePanelOpen}
        />
        <Filter onApplyFilters={handleApplyFilter} />
      </div>
    </>
  );
};

export default FilterButton;
