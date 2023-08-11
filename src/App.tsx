import NavBar from "./components/NavBar";
import MainGrid from "./components/MainGrid";
import Footer from "./components/Footer";
import Filter from "./components/Filter";
import Alert from "./components/Alert";
import { SelectItem } from "./components/Dropdown";
import { useEffect, useState } from "react";
import { Category } from "./hooks/useCategories";
import "./App.css";
import Cart from "./components/Cart";
import { Product } from "./hooks/useProducts";

export interface ProductQuery {
  category: Category | null;
  searchText: string;
  sortOption: SelectItem | null;
}

function App() {
  const [alertVisible, setAlertVisible] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);

  const [productQuery, setProductQuery] = useState<ProductQuery>({
    category: null,
    searchText: "",
    sortOption: null,
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
      <NavBar
        products={selectedProducts}
        selectedCategory={productQuery.category}
        onSelectCategory={(category) =>
          setProductQuery({ ...productQuery, category })
        }
        onSearch={(searchText) =>
          setProductQuery({ ...productQuery, searchText })
        }
      />
      {alertVisible && (
        <Alert color="success" onDismiss={() => setAlertVisible(false)}>
          Product added to your cart!
        </Alert>
      )}
      <div className="main-container">
        <div className="filter-column">
          <Filter />
        </div>
        <div className="products-column">
          <MainGrid
            productQuery={productQuery}
            onClick={handleAddToCart}
            onSort={(sortOption) => {
              setProductQuery({ ...productQuery, sortOption });
            }}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
