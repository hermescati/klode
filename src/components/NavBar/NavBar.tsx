import "./NavBar.css";
import SearchBar from "../SearchBar";
import { BsFillHandbagFill, BsFillPersonFill } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import useCategories, { Category } from "../../hooks/useCategories";

interface Props {
  onSearch: (serachText: string) => void;
  selectedCategory: Category;
  onSelectCategory: (category: Category) => void;
}

const NavBar = ({ onSearch, selectedCategory, onSelectCategory }: Props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { data } = useCategories();

  return (
    <>
      <nav>
        <a className="title">klode.</a>
        <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
          <FaBars color="#070c15" size="24" />
        </div>
        <ul className={menuOpen ? "open" : ""}>
          {data.map((category) => (
            <li key={category.id}>
              <a
                className="nav-links"
                onClick={() => onSelectCategory(category)}
              >
                {category.title}
              </a>
            </li>
          ))}
        </ul>
        <div className="nav-container">
          <SearchBar onSearch={onSearch} />
          <BsFillHandbagFill color="#070c15" size="24" />
          <BsFillPersonFill color="#070c15" size="28" />
        </div>
      </nav>
    </>
  );
};

export default NavBar;
