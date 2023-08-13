import { useState } from "react";
import useColors from "../../hooks/useColors";
import RangeSlider from "../RangeSlider";
import ColorFilterGroup from "../ColorFilterGroup";
import Button from "../Button";
import "./Filter.css";

interface Props {
  onApplyFilters: (
    priceRange: [number, number],
    selectedColors: string[]
  ) => void;
}

const Filter = ({ onApplyFilters }: Props) => {
  const colors = useColors();

  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [isStateChanged, setIsStateChanged] = useState(false);

  const handlePriceChange = (value: [number, number]) => {
    setPriceRange(value);
    setIsStateChanged(true);
  };

  const handleColorSelect = (isChecked: boolean, color: string) => {
    const updatedColors = isChecked
      ? [...selectedColors, color]
      : selectedColors.filter((c) => c !== color);

    setSelectedColors(updatedColors);
    setIsStateChanged(true);
  };

  const handleApplyFilter = () => {
    onApplyFilters(priceRange, selectedColors);
    setIsStateChanged(false);
  };

  return (
    <>
      <div className="filter-container">
        <h2 className="filter-header">Filter Products</h2>
        <hr className="filter-divider"></hr>
        <RangeSlider min={0} max={1000} onChange={handlePriceChange} />
        <hr className="filter-divider"></hr>
        <ColorFilterGroup colors={colors} onChange={handleColorSelect} />
        <div className="filter-button">
          <Button
            color="primary"
            size="small"
            disabled={!isStateChanged}
            onClick={handleApplyFilter}
          >
            Apply filters
          </Button>
        </div>
      </div>
    </>
  );
};

export default Filter;
