import SearchBar from "../SearchBar";
import styles from "../NavBar/NavBar.module.css";
import { RiShoppingCartFill } from "react-icons/ri";
import { BsFillPersonFill } from "react-icons/bs";

const NavBar = () => {
  const categories = ["Bags", "Watches", "Shoes", "Jewerly"];

  return (
    <>
      <div className={[styles.navBar, styles.styckyTop].join(" ")}>
        <div className={styles.navLeftContainer}>
          <a className={styles.navLogo}>klode.</a>
          <div className={styles.navLinkContainer}>
            {categories.map((category) => (
              <a className={styles.navLink} key={category}>
                {category}
              </a>
            ))}
          </div>
        </div>

        <div className={styles.navRightContainer}>
          <SearchBar onSearch={() => console.log("searching")} />
          <RiShoppingCartFill color="#070c15" size="24" />
          <BsFillPersonFill color="#070c15" size="24" />
        </div>
      </div>
    </>
  );
};

export default NavBar;
