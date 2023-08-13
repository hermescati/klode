import { Product } from "../../hooks/useProducts";
import { FaStar } from "react-icons/fa";
import Badge from "../Badge";
import Button from "../Button";
import "./ProductCard.css";

interface Props {
  product: Product;
  onClick: (product: Product) => void;
}

const ProductCard = ({ product, onClick }: Props) => {
  const isDiscounted = product.discount > 0;
  const discountedPrice = product.price * (1 - product.discount);

  const handleOnClick = () => {
    onClick(product);
  };

  return (
    <>
      <div className="card">
        <img className="card-image" alt={product.name} src={product.image} />
        <div className="card-badges">
          {isDiscounted && <Badge color="danger">sale</Badge>}{" "}
          <Badge color="rating">
            <div className="rating-wrapper">
              <FaStar size="13" color="#1D242D" />
              <p className="product-rating">{product.rating}</p>{" "}
            </div>
          </Badge>
        </div>
        <div className="card-body">
          <div className="card-info">
            <h1 className="card-header">{product.name}</h1>
            <p className="card-description">{product.description}</p>
          </div>
          <div className="card-action">
            <div className="card-pricing">
              {isDiscounted && (
                <p className="card-original-price">
                  from ${product.price.toFixed(2)}
                </p>
              )}
              <p className="card-discounted-price">
                ${discountedPrice.toFixed(2)}
              </p>
            </div>
            <div className="card-button">
              <Button onClick={handleOnClick}>Add to cart</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
