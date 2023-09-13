import { useEffect, useState } from "react";
import { Product } from "../../hooks/useProducts";
import { CgMenuRight } from "react-icons/cg";
import SearchBar from "../SearchBar";
import Cart from "../Cart";
import Account from "../Account";
import "./NavBar.css";

interface Props {
  products: Product[];
  onSearch: (serachText: string) => void;
}

const NavBar = ({ products, onSearch }: Props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [floating, setFloating] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setFloating(true);
    } else {
      setFloating(false);
    }
  };

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav
        className={`navbar ${floating || menuOpen ? "navbar-floating" : ""}`}
      >
        <div className="navbar-logo">
          <a>klode.</a>
        </div>
        <div className="navbar-menu" onClick={handleMenuToggle}>
          <CgMenuRight size="32" />
        </div>
        <div className="navbar-search">
          <SearchBar
            placeholder="Search by name, brand or inspiration"
            onSearch={onSearch}
          />
        </div>
        <ul
          className={
            menuOpen ? "navbar-container expanded" : "navbar-container"
          }
        >
          <hr />
          <li>
            <div className="navbar-item cart">
              <Cart products={products} />
              <p className="navbar-button-label">Your Cart</p>
            </div>
          </li>
          <li>
            <div className="navbar-item account">
              <Account />
              <p className="navbar-button-label">Your Profile</p>
            </div>
          </li>
        </ul>
        {/* <div className="navbar-menu" onClick={handleMenuToggle}>
          <FaBars color="#070c15" size="24" />
        </div>
        <div
          className={
            menuOpen
              ? "navbar-button-container expanded"
              : "navbar-button-container"
          }
        >
          <div className="navbar-button">
            
            <p className="navbar-button-label">Your Cart</p>
          </div>
          <div className="navbar-button">
            <BsFillPersonFill color="#070c15" size="28" />
            <p className="navbar-button-label">Your Profile</p>
          </div>
        </div> */}
        {/* <ul
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
        </ul> */}
      </nav>
    </>
  );
};

export default NavBar;
