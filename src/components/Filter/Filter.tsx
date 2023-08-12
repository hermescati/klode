import RangeSlider from "../RangeSlider";
import "./Filter.css";

interface Props {
  onPriceChange: (value: [number, number]) => void;
}

const Filter = ({ onPriceChange }: Props) => {
  return (
    <>
      <div className="filter-container">
        <h2 className="filter-header">Filter Products</h2>
        <hr className="filter-divider"></hr>
        <RangeSlider min={0} max={1000} onChange={onPriceChange} />
        <hr className="filter-divider"></hr>
      </div>
    </>
  );
};

export default Filter;
