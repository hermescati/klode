import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import ProductGrid from "./components/ProductGrid";
import useCategories, { Category } from "./hooks/useCategories";
import Footer from "./components/Footer";

export interface ProductQuery {
  category: Category;
  searchText: string;
}

function App() {
  const { data } = useCategories();
  const defaultCategory = data[0];

  const [productQuery, setProductQuery] = useState<ProductQuery>({
    category: defaultCategory,
    searchText: "",
  });

  return (
    <>
      {/* <div>
        <NavBar
          selectedCategory={productQuery.category}
          onSelectCategory={(category) =>
            setProductQuery({ ...productQuery, category })
          }
          onSearch={(searchText) =>
            setProductQuery({ ...productQuery, searchText })
          }
        />
        <div className="filter" />
        <Header selectedCategory={productQuery.category} />
        <ProductGrid productQuery={productQuery} />
      </div> */}
      <Footer />
    </>
  );
}

export default App;
