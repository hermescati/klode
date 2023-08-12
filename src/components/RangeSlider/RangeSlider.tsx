import { useRef, useState } from "react";
import "./RangeSlider.css";
import "rc-slider/assets/index.css";
import Slider from "rc-slider";

interface Props {
  min: number;
  max: number;
  onChange: (value: [number, number]) => void;
}

const RangeSlider = ({ min, max, onChange }: Props) => {
  const [values, setValues] = useState<[number, number]>([min, max]);

  const handleMinInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newMin = parseInt(event.target.value);
    if (!isNaN(newMin) && newMin >= min && newMin <= values[1]) {
      setValues([newMin, values[1]]);
      onChange([newMin, values[1]]);
    }
  };

  const handleMaxInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newMax = parseInt(event.target.value);
    if (!isNaN(newMax) && newMax >= values[0] && newMax <= max) {
      setValues([values[0], newMax]);
      onChange([values[0], newMax]);
    }
  };

  const calculateMarks = (range: number) => {
    const percentageMarks = [];

    for (let i = 0; i <= range; i += range * 0.1) {
      percentageMarks.push(i);
    }
    return percentageMarks;
  };

  const percentageMarks = calculateMarks(max - min);

  const marks = {
    [percentageMarks[0]]: {
      style: { color: "#F9FAFB" },
      label: percentageMarks[0],
    },
    [percentageMarks[1]]: {
      style: { color: "#F9FAFB" },
      label: percentageMarks[1],
    },
    [percentageMarks[2]]: {
      style: { color: "#F9FAFB" },
      label: percentageMarks[2],
    },
    [percentageMarks[3]]: {
      style: { color: "#F9FAFB" },
      label: percentageMarks[3],
    },
    [percentageMarks[4]]: {
      style: { color: "#F9FAFB" },
      label: percentageMarks[4],
    },
    [percentageMarks[5]]: {
      style: { color: "#F9FAFB" },
      label: percentageMarks[5],
    },
    [percentageMarks[6]]: {
      style: { color: "#F9FAFB" },
      label: percentageMarks[6],
    },
    [percentageMarks[7]]: {
      style: { color: "#F9FAFB" },
      label: percentageMarks[7],
    },
    [percentageMarks[8]]: {
      style: { color: "#F9FAFB" },
      label: percentageMarks[8],
    },
    [percentageMarks[9]]: {
      style: { color: "#F9FAFB" },
      label: percentageMarks[9],
    },
    [percentageMarks[10]]: {
      style: { color: "#F9FAFB" },
      label: percentageMarks[10],
    },
  };

  return (
    <>
      <div>
        <div className="slider-container">
          <h3 className="slider-heading">Price Range</h3>
          <Slider
            range
            min={min}
            max={max}
            marks={marks}
            step={null}
            onChange={(newValues) => {
              setValues(newValues as [number, number]);
              onChange(newValues as [number, number]);
            }}
            value={values}
            allowCross={true}
            pushable
            dotStyle={{
              height: 4,
              width: 4,
              borderColor: "#38557B",
            }}
            trackStyle={{
              marginTop: 1,
              marginLeft: -6,
              borderRadius: 4,
              backgroundColor: "#38557B",
              height: 6,
            }}
            railStyle={{
              marginLeft: -4,
              borderRadius: 4,
              backgroundColor: "#EBEEF2",
              height: 8,
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
        <div className="slider-fields">
          <div className="col">
            <label className="input-field-label">Min. Price ($)</label>
            <input
              type="number"
              className="input-field"
              value={values[0]}
              defaultValue={min}
              onChange={handleMinInputChange}
            />
          </div>
          <div className="col">
            <label className="input-field-label">Max. Price ($)</label>
            <input
              type="number"
              className="input-field"
              value={values[1]}
              onChange={handleMaxInputChange}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default RangeSlider;
