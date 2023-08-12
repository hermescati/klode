import NavBar from "./components/NavBar";
import MainGrid from "./components/MainGrid";
import Footer from "./components/Footer";
import Alert from "./components/Alert";
import { SelectItem } from "./components/Dropdown";
import { useEffect, useState } from "react";
import { Category } from "./hooks/useCategories";
import "./App.css";
import { Product } from "./hooks/useProducts";
import Filter from "./components/Filter";

export interface ProductQuery {
  category: Category | null;
  searchText: string;
  sortOption: SelectItem | null;
  priceRange: number[];
  selectedColors: string[];
}

function App() {
  const [alertVisible, setAlertVisible] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);

  const [productQuery, setProductQuery] = useState<ProductQuery>({
    category: null,
    searchText: "",
    sortOption: null,
    priceRange: [],
    selectedColors: [],
  });

  const handleAddToCart = (newProduct: Product) => {
    setAlertVisible(true);
    setSelectedProducts((products) => [...products, newProduct]);
  };

  const handleApplyFilters = (
    priceRange: [number, number],
    selectedColors: string[]
  ) => {
    setProductQuery({
      ...productQuery,
      priceRange,
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
        selectedCategory={productQuery.category}
        onSelectCategory={(category) =>
          setProductQuery({ ...productQuery, category })
        }
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
