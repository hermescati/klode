import { Product } from "../../hooks/useProducts";
import Badge from "../Badge";
import BrandLogo from "../BrandLogo";
import Wishlist from "../Wishlist";
import FloatingButton from "../FloatingButton";
import "./ProductCard.css";

interface Props {
  product: Product;
  onClick: (product: Product) => void;
}

const ProductCard = ({ product, onClick }: Props) => {
  const isDiscounted = product.discount > 0;

  const handleOnClick = () => {
    onClick(product);
  };

  return (
    <>
      <div className="card">
        <div className="card-image-wrapper">
          <div className="card-image">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="card-badge">
            {isDiscounted && (
              <Badge color="danger">-{product.discount * 100}%</Badge>
            )}
          </div>
          <div className="card-cta">
            <FloatingButton color="transparent">
              <Wishlist onClick={handleOnClick} />
            </FloatingButton>
          </div>
        </div>
        <div className="card-wrapper">
          <div className="card-container">
            <div className="product-brand">
              <BrandLogo product={product} />
              <span>{product.model}</span>
            </div>
            <h2>{product.name}</h2>
            <div className="card-footer">
              <h2>${product.price.toFixed(2)}</h2>
              {isDiscounted && (
                <span className="product-original-price">
                  ${(product.price * (1 - product.discount)).toFixed(2)}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
