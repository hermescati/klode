import { useEffect, useState } from "react";
import products from "../data/products";
import { Product } from "./useProducts";

const useColors = () => {
  const [colors, setColors] = useState<string[]>([]);

  useEffect(() => {
    const allColors: string[] = products.reduce(
      (acc: string[], product: Product) => {
        product.colors.forEach((color) => {
          if (!acc.includes(color)) {
            acc.push(color);
          }
        });
        return acc;
      },
      []
    );

    setColors(allColors.sort());
  }, []);

  return colors;
};

export default useColors;
