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
  onSelectCategory: (category: Category) => void;
}

const NavBar = ({ selectedCategory, products, onSelectCategory }: Props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { data } = useCategories();

  return (
    <>
      <nav className="navbar">
        <a className="navbar-logo">klode.</a>
        <div className="navbar-menu" onClick={() => setMenuOpen(!menuOpen)}>
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
          {data.map((category) => (
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
          ))}
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

  // return (
  //   <>
  //     <nav>
  //       <a className="title">klode.</a>
  //       <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
  //         <FaBars color="#070c15" size="24" />
  //       </div>
  //       <ul className={menuOpen ? "open" : ""}>
  //         {data.map((category) => (
  //           <li key={category.id}>
  //             <a
  //               className={`nav-links + ${
  //                 selectedCategory === category ? "active" : ""
  //               }`}
  //               onClick={() => onSelectCategory(category)}
  //             >
  //               {category.title}
  //             </a>
  //           </li>
  //         ))}
  //       </ul>
  //       <div className="nav-container">
  //         <SearchBar onSearch={onSearch} />
  //         <Cart products={products} />
  //         <BsFillPersonFill color="#070c15" size="42" />
  //       </div>
  //     </nav>
  //   </>
  // );
};

export default NavBar;
