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
  const { category, searchText } = productQuery;

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

  return { data: filteredProducts };
};

export default useProducts;
