import { useEffect, useState } from "react";
import { Product } from "./hooks/useProducts";
import { SelectItem } from "./components/Dropdown";
import NavBar from "./components/NavBar";
import MainGrid from "./components/MainGrid";
import Footer from "./components/Footer";
import Filter from "./components/Filter";
import Alert from "./components/Alert";
import "./App.css";

export interface ProductQuery {
  searchText: string;
  sortOption: SelectItem | null;
  priceRange: number[];
  selectedCategories: string[];
  selectedBrands: string[];
  selectedSizes: string[];
  selectedColors: string[];
}

function App() {
  const [alertVisible, setAlertVisible] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);

  const [productQuery, setProductQuery] = useState<ProductQuery>({
    searchText: "",
    sortOption: null,
    priceRange: [],
    selectedCategories: [],
    selectedBrands: [],
    selectedSizes: [],
    selectedColors: [],
  });

  const handleAddToCart = (newProduct: Product) => {
    setAlertVisible(true);
    setSelectedProducts((products) => [...products, newProduct]);
  };

  const handleApplyFilters = (
    priceRange: [number, number],
    selectedCategories: string[],
    selectedBrands: string[],
    selectedSizes: string[],
    selectedColors: string[]
  ) => {
    setProductQuery({
      ...productQuery,
      priceRange,
      selectedCategories,
      selectedBrands,
      selectedSizes,
      selectedColors,
    });
  };

  useEffect(() => {
    if (alertVisible) {
      const timeoutId = setTimeout(() => {
        setAlertVisible(false);
      }, 3000);

      return () => clearTimeout(timeoutId);
    }
  }, [alertVisible]);

  return (
    <>
      {alertVisible && (
        <Alert color="success" onDismiss={() => setAlertVisible(false)}>
          Product added to your cart!
        </Alert>
      )}
      <NavBar
        products={selectedProducts}
        onSearch={(searchText) => {
          setProductQuery({ ...productQuery, searchText });
        }}
      />
      <div className="main-container">
        <div className="filter-column">
          <Filter onApplyFilters={handleApplyFilters} />
        </div>
        <div className="products-column">
          <MainGrid
            productQuery={productQuery}
            onClick={handleAddToCart}
            onSort={(sortOption) => {
              setProductQuery({ ...productQuery, sortOption });
            }}
            onSearch={(searchText) =>
              setProductQuery({ ...productQuery, searchText })
            }
            onApplyFilters={handleApplyFilters}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
