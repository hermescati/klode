import { useState } from "react";
import { BsFilter, BsArrowLeft } from "react-icons/bs";
import Dropdown, { SelectItem } from "../Dropdown";
import Filter from "../Filter";
import "./FilterButton.css";

interface Props {
  items: SelectItem[];
  onSort: (item: SelectItem) => void;
  onApplyFilters: (
    priceRange: [number, number],
    selectedColors: string[]
  ) => void;
}

const FilterButton = ({ items, onSort, onApplyFilters }: Props) => {
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
        <div className="side-panel-container">
          <div className="side-panel-chevron">
            <BsArrowLeft
              size="24"
              strokeWidth="1px"
              color="#15273C"
              onClick={handlePanelOpen}
            />
            <p className="chevron-text">Back</p>
          </div>
          <hr className="side-panel-divider"></hr>
          <div className="side-panel-sort">
            <Dropdown
              defaultText="Sort products"
              items={items}
              onSort={onSort}
            />
          </div>
          <Filter onApplyFilters={handleApplyFilter} />
        </div>
      </div>
    </>
  );
};

export default FilterButton;
