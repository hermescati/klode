import { useEffect, useState } from "react";
import products from "../data/products";

const useFilters = () => {
  const [brands, setBrands] = useState<string[]>([]);
  const [colors, setColors] = useState<string[]>([]);
  const [sizing, setSizing] = useState<string[]>([]);
  const [sizes, setSizes] = useState<string[]>([]);

  useEffect(() => {
    const uniqueBrands = [...new Set(products.flatMap((item) => item.brand))];
    setBrands(uniqueBrands);

    const uniqueColors = [...new Set(products.flatMap((item) => item.colors))];
    setColors(uniqueColors);

    const uniqueSizing = [...new Set(products.flatMap((item) => item.sizing))];
    setSizing(uniqueSizing);

    const start = 4;
    const end = 17;
    const increment = 0.5;
    const generatedSizes = [];

    for (let size = start; size <= end; size += increment) {
      generatedSizes.push("US " + size.toString());
    }
    setSizes(generatedSizes);
  }, []);

  return {
    brands,
    colors,
    sizing,
    sizes,
  };
};

export default useFilters;
