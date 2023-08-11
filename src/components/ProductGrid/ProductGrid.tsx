import { useEffect, useState } from "react";
import useProducts from "../../hooks/useProducts";
import ProductCard from "../ProductCard";
import { ProductQuery } from "../../App";
import "./ProductGrid.css";
import Button from "../Button";
import Header from "../Header";
import Dropdown, { SelectItem } from "../Dropdown";
import Message from "../Message";
import messageIcon from "../../assets/no-product-found.svg";

interface Props {
  productQuery: ProductQuery;
  onClick: () => void;
  onSelectItem: (item: SelectItem) => void;
}

const ProductGrid = ({ productQuery, onClick, onSelectItem }: Props) => {
  const optionsList: SelectItem[] = [
    { id: 1, name: "Alphabetical A-Z" },
    { id: 2, name: "Alphabetical Z-A" },
    { id: 3, name: "Price Ascending" },
    { id: 4, name: "Price Descending" },
  ];

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
        <div className="grid-header">
          <Header selectedCategory={productQuery.category} />
          <div className="col">
            <Dropdown
              defaultText="Sort products"
              items={optionsList}
              onSelectItem={onSelectItem}
            />
            <p className="product-counter">
              Showing: {displayedProducts} out of {totalProducts} products
            </p>
          </div>
        </div>
        {visibleProducts.length === 0 ? (
          <Message>
            <img height="200px" src={messageIcon} alt="image" />
            No products found
          </Message>
        ) : (
          <div className="grid-container">
            {visibleProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onClick={onClick}
              />
            ))}
          </div>
        )}
        <div className="load-button">
          {visibleProducts.length < data.length && (
            <Button onClick={loadMoreProducts}>More Products</Button>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductGrid;
