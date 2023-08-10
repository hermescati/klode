interface Props {
  text: string;
  items: string[];
}

const Dropdown = ({ text, items }: Props) => {
  return (
    <>
      <select className="form-select">
        <option value="">{text}</option>
        {items.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </>
  );
};

export default Dropdown;
