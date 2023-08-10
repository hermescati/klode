import { ProductQuery } from "../App";
import products from "../data/products";
import { Category } from "./useCategories";

export interface Product {
  id: number;
  image: string;
  name: string;
  description: string;
  price: number;
  discount: number;
  rating: number;
  category: Category;
}

const useProducts = (productQuery: ProductQuery) => {
  const { category, searchText, sortOption } = productQuery;

  let filteredProducts = products;

  if (category) {
    filteredProducts = filteredProducts.filter(
      (product) => product.category.id === category.id
    );
  }

  if (searchText) {
    filteredProducts = filteredProducts.filter((product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase())
    );
  }

  if (sortOption) {
    if (sortOption.name === "Alphabetical A-Z") {
      filteredProducts = filteredProducts.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    } else if (sortOption.name === "Alphabetical Z-A") {
      filteredProducts = filteredProducts.sort((a, b) =>
        b.name.localeCompare(a.name)
      );
    } else if (sortOption.name === "Price Ascending") {
      filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortOption.name === "Price Descending") {
      filteredProducts = filteredProducts.sort((a, b) => b.price - a.price);
    }
  }

  return { data: filteredProducts };
};

export default useProducts;
