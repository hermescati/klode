import NavBar from "./components/NavBar";
import MainGrid from "./components/MainGrid";
import Footer from "./components/Footer";
import Alert from "./components/Alert";
import { SelectItem } from "./components/Dropdown";
import { useEffect, useState } from "react";
import { Category } from "./hooks/useCategories";
import "./App.css";
import { Product } from "./hooks/useProducts";
import RangeSlider from "./components/RangeSlider";
import Filter from "./components/Filter";

export interface ProductQuery {
  category: Category | null;
  searchText: string;
  sortOption: SelectItem | null;
  priceRange: number[];
}

function App() {
  const [alertVisible, setAlertVisible] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);

  const [productQuery, setProductQuery] = useState<ProductQuery>({
    category: null,
    searchText: "",
    sortOption: null,
    priceRange: [],
  });

  const handleAddToCart = (newProduct: Product) => {
    setAlertVisible(true);
    setSelectedProducts((products) => [...products, newProduct]);
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
          <Filter
            onPriceChange={(priceRange) => {
              setProductQuery({ ...productQuery, priceRange });
            }}
          />
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
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
