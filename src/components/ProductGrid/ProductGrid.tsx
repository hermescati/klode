import useProducts from "../../hooks/useProducts";
import ProductCard from "../ProductCard";
import { ProductQuery } from "../../App";
import "./ProductGrid.css";

interface Props {
  productQuery: ProductQuery;
}

const ProductGrid = ({ productQuery }: Props) => {
  const { data } = useProducts(productQuery);

  return (
    <>
      <div className="row-flex product-grid">
        {data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default ProductGrid;
