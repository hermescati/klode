import { useState } from "react";
import RangeSlider from "../RangeSlider";
import Button from "../Button";
import CheckBoxGroup from "../CheckBoxGroup";
import useFilters from "../../hooks/useFilters";
import "./Filter.css";
import Accordion from "../Accordion";

interface Props {
  onApplyFilters: (
    priceRange: [number, number],
    selectedCategories: string[],
    selectedBrands: string[],
    selectedSizes: string[],
    selectedColors: string[]
  ) => void;
}

const Filter = ({ onApplyFilters }: Props) => {
  const { brands, colors, sizing, sizes } = useFilters();

  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [isStateChanged, setIsStateChanged] = useState(false);

  const handlePriceChange = (value: [number, number]) => {
    setPriceRange(value);
    setIsStateChanged(true);
  };

  const handleCategorySelect = (isChecked: boolean, category: string) => {
    const updatedCategories = isChecked
      ? [...selectedCategories, category]
      : selectedCategories.filter((c) => c !== category);

    setSelectedCategories(updatedCategories);
    setIsStateChanged(true);
  };

  const handleBrandSelect = (isChecked: boolean, brand: string) => {
    const updatedBrands = isChecked
      ? [...selectedBrands, brand]
      : selectedBrands.filter((b) => b !== brand);

    setSelectedBrands(updatedBrands);
    setIsStateChanged(true);
  };

  const handleSizeSelect = (isChecked: boolean, size: string) => {
    const updatedSizes = isChecked
      ? [...selectedSizes, size]
      : selectedSizes.filter((s) => s !== size);

    setSelectedSizes(updatedSizes);
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
    onApplyFilters(
      priceRange,
      selectedCategories,
      selectedBrands,
      selectedSizes,
      selectedColors
    );
    setIsStateChanged(false);
  };

  return (
    <>
      <div className="filter-container">
        <h2 className="filter-header">Filter Products</h2>
        <hr className="filter-divider"></hr>
        <Accordion title="Price">
          <RangeSlider
            min={0}
            max={2000}
            range={priceRange}
            onChange={handlePriceChange}
          />
        </Accordion>
        <hr className="filter-divider"></hr>
        <Accordion title="Category">
          <CheckBoxGroup
            items={sizing}
            checkedItems={selectedCategories}
            onChange={handleCategorySelect}
          />
        </Accordion>
        <hr className="filter-divider"></hr>
        <Accordion title="Brands">
          <CheckBoxGroup
            items={brands}
            checkedItems={selectedBrands}
            onChange={handleBrandSelect}
          />
        </Accordion>
        <hr className="filter-divider"></hr>
        <Accordion title="Sizes">
          <CheckBoxGroup
            items={sizes}
            checkedItems={selectedSizes}
            onChange={handleSizeSelect}
          />
        </Accordion>
        <hr className="filter-divider"></hr>
        <Accordion title="Colors">
          <CheckBoxGroup
            items={colors}
            checkedItems={selectedColors}
            onChange={handleColorSelect}
          />
        </Accordion>
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
