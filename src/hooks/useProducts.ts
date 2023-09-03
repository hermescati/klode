import { ProductQuery } from "../App";
import products from "../data/products";

export interface Product {
  sku: string;
  brand: string;
  model: string;
  nickname: string;
  description: string;
  colorway: string;
  colors: string[];
  sizing: string;
  available_sizes: number[];
  release_year: number;
  retail_price: number;
  resell_price: number;
  discount_percentage: number;
  image: string;
}

const useProducts = (productQuery: ProductQuery) => {
  const {
    searchText,
    sortOption,
    priceRange,
    selectedCategories,
    selectedBrands,
    selectedSizes,
    selectedColors,
  } = productQuery;

  let filteredProducts = products;

  if (searchText) {
    filteredProducts = filteredProducts.filter(
      (product) =>
        product.sku.toLowerCase().includes(searchText.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchText.toLowerCase()) ||
        product.model.toLowerCase().includes(searchText.toLowerCase()) ||
        product.nickname.toLowerCase().includes(searchText.toLowerCase()) ||
        product.description.toLowerCase().includes(searchText.toLowerCase())
    );
  }

  if (priceRange && priceRange.length === 2) {
    const [minPrice, maxPrice] = priceRange;
    filteredProducts = filteredProducts.filter((product) => {
      const discountedPrice =
        product.resell_price * (1 - product.discount_percentage);
      return discountedPrice >= minPrice && discountedPrice <= maxPrice;
    });
  }

  if (selectedCategories.length > 0) {
    filteredProducts = filteredProducts.filter((product) =>
      selectedCategories.includes(product.sizing)
    );
  }

  if (selectedBrands.length > 0) {
    filteredProducts = filteredProducts.filter((product) =>
      selectedBrands.includes(product.brand)
    );
  }

  if (selectedSizes.length > 0) {
    filteredProducts = filteredProducts.filter((product) =>
      product.available_sizes.some((size) =>
        selectedSizes.includes("US " + size.toString())
      )
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
        a.nickname.localeCompare(b.nickname)
      );
    } else if (sortOption.name === "Alphabetical Z-A") {
      filteredProducts = filteredProducts.sort((a, b) =>
        b.nickname.localeCompare(a.nickname)
      );
    } else if (sortOption.name === "Price Ascending") {
      filteredProducts = filteredProducts.sort((a, b) => {
        const discountedPriceA = a.resell_price * (1 - a.discount_percentage);
        const discountedPriceB = b.resell_price * (1 - b.discount_percentage);
        return discountedPriceA - discountedPriceB;
      });
    } else if (sortOption.name === "Price Descending") {
      filteredProducts = filteredProducts.sort((a, b) => {
        const discountedPriceA = a.resell_price * (1 - a.discount_percentage);
        const discountedPriceB = b.resell_price * (1 - b.discount_percentage);
        return discountedPriceB - discountedPriceA;
      });
    }
  }
  return { data: filteredProducts };
};

export default useProducts;
