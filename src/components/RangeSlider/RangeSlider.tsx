import { useEffect, useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./RangeSlider.css";

interface Props {
  min: number;
  max: number;
  range: [number, number];
  onChange: (value: [number, number]) => void;
}

const RangeSlider = ({ min, max, range, onChange }: Props) => {
  const [values, setValues] = useState<[number, number]>([min, max]);

  useEffect(() => {
    setValues(range);
  }, [range]);

  const handleMinInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newMin = parseInt(event.target.value);
    if (!isNaN(newMin)) {
      setValues([newMin, values[1]]);
      onChange([newMin, values[1]]);
    }
  };

  const handleMaxInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newMax = parseInt(event.target.value);
    if (!isNaN(newMax)) {
      setValues([values[0], newMax]);
      onChange([values[0], newMax]);
    }
  };

  const calculateMarks = (range: number) => {
    const stepSize = range * 0.1;
    return Array.from({ length: 11 }, (_, index) =>
      Math.round(index * stepSize)
    );
  };

  const percentageMarks = calculateMarks(max - min);
  const marks = Object.fromEntries(
    percentageMarks.map((mark) => [
      mark,
      { style: { color: "#F9FAFB" }, label: mark },
    ])
  );

  return (
    <>
      <div>
        <div className="slider-wrapper">
          <Slider
            range
            min={min}
            max={max}
            marks={marks}
            step={null}
            onChange={(newValues) => {
              console.log(newValues);
              setValues(newValues as [number, number]);
              onChange(newValues as [number, number]);
            }}
            value={values}
            allowCross={true}
            pushable
            dotStyle={{
              height: 4,
              marginLeft: -8,
              width: 4,
              borderColor: "#38557B",
            }}
            trackStyle={{
              marginTop: 1,
              borderRadius: 4,
              backgroundColor: "#38557B",
              height: 6,
            }}
            railStyle={{
              marginLeft: -16,
              borderRadius: 4,
              backgroundColor: "#EBEEF2",
              height: 8,
              width: 220,
            }}
            handleStyle={{
              marginLeft: -6,
              marginTop: -6,
              height: 20,
              width: 20,
              borderWidth: 2,
              borderColor: "#EBEEF2",
              backgroundColor: "#F9FAFB",
              opacity: 1,
            }}
          />
        </div>
        <div className="slider-container">
          <div className="slider-field">
            <label className="input-field-label">Min. Price ($)</label>
            <input
              type="number"
              className="input-field"
              value={values[0]}
              placeholder={min.toString()}
              onChange={handleMinInputChange}
            />
          </div>
          <div className="slider-field">
            <label className="input-field-label">Max. Price ($)</label>
            <input
              type="number"
              className="input-field"
              value={values[1]}
              placeholder={max.toString()}
              onChange={handleMaxInputChange}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default RangeSlider;
