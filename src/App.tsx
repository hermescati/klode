import NavBar from "./components/NavBar";
import Header from "./components/Header";
import ProductGrid from "./components/ProductGrid";
import Footer from "./components/Footer";
import Dropdown, { SelectItem } from "./components/Dropdown";
import { useState } from "react";
import { Category } from "./hooks/useCategories";
import "./App.css";

export interface ProductQuery {
  category: Category | null;
  searchText: string;
  sortOption: SelectItem | null;
}

function App() {
  const [productQuery, setProductQuery] = useState<ProductQuery>({
    category: null,
    searchText: "",
    sortOption: null,
  });

  const optionsList: SelectItem[] = [
    { id: 1, name: "Alphabetical A-Z" },
    { id: 2, name: "Alphabetical Z-A" },
    { id: 3, name: "Price Ascending" },
    { id: 4, name: "Price Descending" },
  ];

  return (
    <>
      {/* <div className="main-grid">
        <NavBar
          selectedCategory={productQuery.category}
          onSelectCategory={(category) =>
            setProductQuery({ ...productQuery, category })
          }
          onSearch={(searchText) =>
            setProductQuery({ ...productQuery, searchText })
          }
        />
        <Dropdown
          defaultText="Sort products"
          items={optionsList}
          onSelectItem={(sortOption) => {
            setProductQuery({ ...productQuery, sortOption });
          }}
        />
        <Header selectedCategory={productQuery.category} />
        <ProductGrid productQuery={productQuery} />
      </div> */}
      <Footer />
    </>
  );
}

export default App;
