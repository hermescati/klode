import { Category } from "../../hooks/useCategories";
import "./Header.css";

interface Props {
  selectedCategory: Category | null;
}

const Header = ({ selectedCategory }: Props) => {
  return (
    <>
      {selectedCategory !== null ? (
        <div className="col">
          <h1 className="heading">{selectedCategory.title}</h1>
          <p className="description">{selectedCategory.description}</p>
        </div>
      ) : (
        <div className="col">
          <h1 className="heading">All Products</h1>
          <p className="description">
            Explore our wide range of products from different categories.
          </p>
        </div>
      )}
    </>
  );
};

export default Header;
