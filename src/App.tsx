import NavBar from "./components/NavBar";
import Header from "./components/Header";
import ProductGrid from "./components/ProductGrid";
import Footer from "./components/Footer";
import Dropdown, { SelectItem } from "./components/Dropdown";
import { useState } from "react";
import { Category } from "./hooks/useCategories";
import "./App.css";
import Alert from "./components/Alert";

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

  const optionsList: SelectItem[] = [
    { id: 1, name: "Alphabetical A-Z" },
    { id: 2, name: "Alphabetical Z-A" },
    { id: 3, name: "Price Ascending" },
    { id: 4, name: "Price Descending" },
  ];

  return (
    <>
      {alertVisible && (
        <Alert color="success" onDismiss={() => setAlertVisible(false)}>
          Product added to your cart!
        </Alert>
      )}
      <NavBar
        selectedCategory={productQuery.category}
        onSelectCategory={(category) =>
          setProductQuery({ ...productQuery, category })
        }
        onSearch={(searchText) =>
          setProductQuery({ ...productQuery, searchText })
        }
      />
      <div className="main">
        <div className="row">
          <div className="col filter"></div>
          <div className="col">
            <Header selectedCategory={productQuery.category} />
            <Dropdown
              defaultText="Sort products"
              items={optionsList}
              onSelectItem={(sortOption) => {
                setProductQuery({ ...productQuery, sortOption });
              }}
            />
            <ProductGrid
              productQuery={productQuery}
              onClick={() => setAlertVisible(true)}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
