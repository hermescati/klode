import "./Input.css";

interface Props {
  label: string;
  disabled?: boolean;
  placeholder?: string;
  type?: "text" | "number";
  value?: string | number;
  onChange?: (value: string) => void;
}

const Input = ({
  label,
  disabled = false,
  placeholder = "",
  type = "text",
  value = "",
  onChange: propOnChange,
}: Props) => {
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    if (propOnChange) {
      propOnChange(newValue);
    }
  };

  return (
    <div className="input-area">
      <span className="input-label">{label}</span>
      <input
        className="input-field"
        type={type}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        onChange={handleOnChange}
      />
    </div>
  );
};

export default Input;
