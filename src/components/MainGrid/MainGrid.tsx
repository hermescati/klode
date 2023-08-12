import { ProductQuery } from "../../App";
import { Product } from "../../hooks/useProducts";
import Dropdown, { SelectItem } from "../Dropdown";
import FilterButton from "../FilterButton";
import Header from "../Header";
import ProductGrid from "../ProductGrid";
import SearchBar from "../SearchBar";
import "./MainGrid.css";

interface Props {
  productQuery: ProductQuery;
  onClick: (product: Product) => void;
  onSort: (item: SelectItem) => void;
  onSearch: (serachText: string) => void;
  onApplyFilters: (
    priceRange: [number, number],
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
        <div className="left-column">
          <Header selectedCategory={productQuery.category} />
        </div>
        <div className="right-column">
          <SearchBar onSearch={onSearch} />
          <Dropdown
            defaultText="Sort products"
            items={optionsList}
            onSort={onSort}
          />
          <FilterButton onApplyFilters={onApplyFilters} />
        </div>
        <ProductGrid productQuery={productQuery} onClick={onClick} />
      </div>
    </>
  );
};

export default MainGrid;
