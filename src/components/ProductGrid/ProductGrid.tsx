import { useEffect, useState } from "react";
import useProducts from "../../hooks/useProducts";
import ProductCard from "../ProductCard";
import { ProductQuery } from "../../App";
import "./ProductGrid.css";
import Button from "../Button";
import Message from "../Message";
import messageIcon from "../../assets/no-product-found.svg";

interface Props {
  productQuery: ProductQuery;
  onClick: () => void;
}

const ProductGrid = ({ productQuery, onClick }: Props) => {
  const { data } = useProducts(productQuery);

  const productsPerRow = 4;
  const initialRowCount = 5;
  const initialProductCount = productsPerRow * initialRowCount;

  const [visibleProducts, setVisibleProducts] = useState(
    data.slice(0, initialProductCount)
  );

  const loadMoreProducts = () => {
    const newProductCount =
      visibleProducts.length + productsPerRow * initialRowCount;

    const newVisibleProducts = data.slice(0, newProductCount);
    setVisibleProducts(newVisibleProducts);
  };

  useEffect(() => {
    const { data: filteredData } = useProducts(productQuery);
    setVisibleProducts(filteredData.slice(0, initialProductCount));
  }, [productQuery]);

  const totalProducts = data.length;
  const displayedProducts = visibleProducts.length;

  return (
    <>
      <div>
        {visibleProducts.length === 0 ? (
          <Message>
            <img height="200px" src={messageIcon} alt="image" />
            No products found
          </Message>
        ) : (
          <div className="card-grid">
            {visibleProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onClick={onClick}
              />
            ))}
          </div>
        )}
        <p className="product-counter">
          Showing: {displayedProducts} out of {totalProducts} products
        </p>
        <div className="load-button">
          {visibleProducts.length < data.length && (
            <Button color="secondary" onClick={loadMoreProducts}>
              Load More Products
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductGrid;
