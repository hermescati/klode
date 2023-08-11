import "./NavBar.css";
import SearchBar from "../SearchBar";
import { BsFillPersonFill } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import useCategories, { Category } from "../../hooks/useCategories";
import Cart from "../Cart";
import { Product } from "../../hooks/useProducts";

interface Props {
  products: Product[];
  selectedCategory: Category | null;
  onSearch: (serachText: string) => void;
  onSelectCategory: (category: Category) => void;
}

const NavBar = ({
  selectedCategory,
  products,
  onSearch,
  onSelectCategory,
}: Props) => {
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
                className={`nav-links + ${
                  selectedCategory === category ? "active" : ""
                }`}
                onClick={() => onSelectCategory(category)}
              >
                {category.title}
              </a>
            </li>
          ))}
        </ul>
        <div className="nav-container">
          <SearchBar onSearch={onSearch} />
          <Cart products={products} />
          <BsFillPersonFill color="#070c15" size="42" />
        </div>
      </nav>
    </>
  );
};

export default NavBar;
