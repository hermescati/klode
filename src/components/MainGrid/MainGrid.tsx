import { ProductQuery } from "../../App";
import { Product } from "../../hooks/useProducts";
import Header from "../Header";
import SearchBar from "../SearchBar";
import Dropdown, { SelectItem } from "../Dropdown";
import FilterButton from "../FilterButton";
import ProductGrid from "../ProductGrid";
import "./MainGrid.css";

interface Props {
  productQuery: ProductQuery;
  onClick: (product: Product) => void;
  onSort: (item: SelectItem) => void;
  onSearch: (serachText: string) => void;
  onApplyFilters: (
    priceRange: [number, number],
    selectedCategories: string[],
    selectedColors: string[]
  ) => void;
}

const MainGrid = ({
  productQuery,
  onClick,
  onSort,
  onSearch,
  onApplyFilters,
}: Props) => {
  const optionsList: SelectItem[] = [
    { id: 1, name: "Alphabetical A-Z" },
    { id: 2, name: "Alphabetical Z-A" },
    { id: 3, name: "Price Ascending" },
    { id: 4, name: "Price Descending" },
  ];

  return (
    <>
      <div className="main-grid">
        {/* <Header selectedCategory={productQuery.selectedCategories} /> */}
        <h3>All Products</h3>
        <div className="main-navigation">
          <SearchBar onSearch={onSearch} />
          <div className="right-navigation">
            <div className="sort-container">
              <Dropdown
                defaultText="Sort products"
                items={optionsList}
                onSort={onSort}
              />
            </div>
            {/* <FilterButton
              items={optionsList}
              onSort={onSort}
              onApplyFilters={onApplyFilters}
            /> */}
          </div>
        </div>
        <ProductGrid productQuery={productQuery} onClick={onClick} />
      </div>
    </>
  );
};

export default MainGrid;
