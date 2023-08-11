import ProductGrid from "./components/ProductGrid";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Alert from "./components/Alert";
import { SelectItem } from "./components/Dropdown";
import { useState } from "react";
import { Category } from "./hooks/useCategories";
import "./App.css";

export interface ProductQuery {
  category: Category | null;
  searchText: string;
  sortOption: SelectItem | null;
}

function App() {
  const [alertVisible, setAlertVisible] = useState(false);

  const [productQuery, setProductQuery] = useState<ProductQuery>({
    category: null,
    searchText: "",
    sortOption: null,
  });

  return (
    <>
      <NavBar
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
        <div className="filter"></div>
        <ProductGrid
          productQuery={productQuery}
          onClick={() => setAlertVisible(true)}
          onSelectItem={(sortOption) => {
            setProductQuery({ ...productQuery, sortOption });
          }}
        />
      </div>
      <Footer />
    </>
  );
}

export default App;
