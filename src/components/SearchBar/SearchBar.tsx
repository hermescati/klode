import { useRef } from "react";
import { RiSearch2Fill } from "react-icons/ri";
import "./SearchBar.css";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchBar = ({ onSearch }: Props) => {
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
        <RiSearch2Fill color="#9DA8B8" size="24"></RiSearch2Fill>
        <input
          ref={ref}
          className="search-input"
          type="text"
          placeholder="Search..."
        />
      </form>
    </>
  );
};

export default SearchBar;
