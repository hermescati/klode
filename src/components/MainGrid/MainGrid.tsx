import { ProductQuery } from "../../App";
import Dropdown, { SelectItem } from "../Dropdown";
import Header from "../Header";
import ProductGrid from "../ProductGrid";
import "./MainGrid.css";

interface Props {
  productQuery: ProductQuery;
  onClick: () => void;
  onSort: (item: SelectItem) => void;
}

const MainGrid = ({ productQuery, onClick, onSort }: Props) => {
  const optionsList: SelectItem[] = [
    { id: 1, name: "Alphabetical A-Z" },
    { id: 2, name: "Alphabetical Z-A" },
    { id: 3, name: "Price Ascending" },
    { id: 4, name: "Price Descending" },
  ];

  return (
    <>
      <div className="main-grid">
        <div className="left-column">
          <Header selectedCategory={productQuery.category} />
        </div>
        <div className="right-column">
          <Dropdown
            defaultText="Sort products"
            items={optionsList}
            onSort={onSort}
          />
        </div>
        <ProductGrid productQuery={productQuery} onClick={onClick} />
      </div>
    </>
  );
};

export default MainGrid;
