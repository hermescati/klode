import Button from "../Button";
import ColorFilterGroup from "../ColorFilterGroup";
import RangeSlider from "../RangeSlider";
import "./Filter.css";

interface Props {
  onPriceChange: (value: [number, number]) => void;
  onColorSelect: (isChecked: boolean, color: string) => void;
}

const Filter = ({ onPriceChange, onColorSelect }: Props) => {
  const colors = ["Red", "Black", "Brown", "White"];

  const handleApplyFilter = () => {
    console.log("apply filter");
  };

  return (
    <>
      <div className="filter-container">
        <h2 className="filter-header">Filter Products</h2>
        <hr className="filter-divider"></hr>
        <RangeSlider min={0} max={1000} onChange={onPriceChange} />
        <hr className="filter-divider"></hr>
        <ColorFilterGroup colors={colors} onChange={onColorSelect} />
        {/* <div className="filter-button">
          <Button color="primary" size="small" onClick={handleApplyFilter}>
            Apply filters
          </Button>
        </div> */}
      </div>
    </>
  );
};

export default Filter;
