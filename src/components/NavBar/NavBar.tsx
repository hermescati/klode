import { useState } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { Product } from "../../hooks/useProducts";
import Cart from "../Cart";
import "./NavBar.css";

interface Props {
  products: Product[];
  // selectedCategory: Category | null;
  // onSelectCategory: (category: Category) => void;
}

const NavBar = ({ products }: Props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  // const { data } = useCategories();

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className="navbar">
        <a className="navbar-logo">klode.</a>
        <div className="navbar-menu" onClick={handleMenuToggle}>
          <FaBars color="#070c15" size="24" />
        </div>
        <ul
          className={
            menuOpen
              ? "navbar-links-container expanded"
              : "navbar-links-container"
          }
        >
          <hr className="navbar-divider"></hr>
          {/* {data.map((category) => (
            <li className="navbar-links" key={category.id}>
              <a
                className={`navbar-links-item + ${
                  selectedCategory === category ? "active" : ""
                }`}
                onClick={() => onSelectCategory(category)}
              >
                {category.title}
              </a>
            </li>
          ))} */}
        </ul>
        <div
          className={
            menuOpen
              ? "navbar-button-container expanded"
              : "navbar-button-container"
          }
        >
          <div className="navbar-button">
            <Cart products={products} />
            <p className="navbar-button-label">Your Cart</p>
          </div>
          <div className="navbar-button">
            <BsFillPersonFill color="#070c15" size="28" />
            <p className="navbar-button-label">Your Profile</p>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
