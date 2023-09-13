import { useRef } from "react";
import { RiSearch2Fill } from "react-icons/ri";
import "./SearchBar.css";

interface Props {
  onSearch: (searchText: string) => void;
  placeholder?: string;
}

const SearchBar = ({ onSearch, placeholder = "" }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <>
      <form
        className="search-bar"
        onSubmit={(event) => {
          event.preventDefault();
          if (ref.current) onSearch(ref.current.value);
        }}
      >
        <input
          ref={ref}
          className="search-input"
          type="text"
          placeholder={placeholder}
        />
        <RiSearch2Fill color="#9DA8B8" size="20"></RiSearch2Fill>
      </form>
    </>
  );
};

export default SearchBar;
