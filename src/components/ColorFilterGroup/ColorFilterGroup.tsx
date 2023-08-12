import CheckBox from "../CheckBox";
import "./ColorFilterGroup.css";

interface Props {
  colors: string[];
  onChange: (isChecked: boolean, text: string) => void;
}

const ColorFilterGroup = ({ colors, onChange }: Props) => {
  return (
    <>
      <div className="colors-container">
        <h3 className="colors-group-heading">Colors</h3>
        <div className="checkbox-group">
          {colors.map((color) => (
            <CheckBox key={color} text={color} onChange={onChange} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ColorFilterGroup;
