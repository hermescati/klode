import { ProductQuery } from "../App";
import products from "../data/products";
import { Category } from "./useCategories";

export interface Product {
  id: number;
  image: string;
  brand: string;
  name: string;
  description: string;
  colors: string[];
  price: number;
  discount: number;
  rating: number;
  category: Category;
}

const useProducts = (productQuery: ProductQuery) => {
  const { category, searchText, sortOption, priceRange, selectedColors } =
    productQuery;

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

  if (priceRange && priceRange.length === 2) {
    const [minPrice, maxPrice] = priceRange;
    filteredProducts = filteredProducts.filter(
      (product) => product.price >= minPrice && product.price <= maxPrice
    );
  }

  if (selectedColors.length > 0) {
    filteredProducts = filteredProducts.filter((product) =>
      product.colors.some((color) => selectedColors.includes(color))
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
