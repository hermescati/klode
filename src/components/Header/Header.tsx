import "./Header.css";
import { Category } from "../../hooks/useCategories";
import Dropdown from "../Dropdown/Dropdown";

interface Props {
  selectedCategory: Category;
}

const Header = ({ selectedCategory }: Props) => {
  const sortItems = [
    "Alphabetical A-Z",
    "Alphabetical Z-A",
    "Price Ascending",
    "Price Descending",
  ];

  return (
    <div className="cat-container">
      <div>
        <p className="cat-header">{selectedCategory?.title}</p>
        <p className="cat-description">{selectedCategory?.description}</p>
      </div>
      {/* <div>
        <Dropdown text="Sort Products" items={sortItems} />
        <p className="cat-description">showing 4 out 4 products</p>
      </div> */}
    </div>
  );
};

export default Header;
