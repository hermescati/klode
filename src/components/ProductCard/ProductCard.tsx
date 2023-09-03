import { Product } from "../../hooks/useProducts";
import Badge from "../Badge";
import BrandLogo from "../BrandLogo";
import "./ProductCard.css";
import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface Props {
  product: Product;
  onClick: (product: Product) => void;
}

const ProductCard = ({ product, onClick }: Props) => {
  const isDiscounted = product.discount_percentage > 0;

  const handleOnClick = () => {
    onClick(product);
  };

  const [wishlistFilled, setWishlistFilled] = useState(false);

  const handleWishlistClick = () => {
    setWishlistFilled(!wishlistFilled);
  };

  return (
    <>
      <div className="card">
        <div className="card-image-wrapper">
          <div className="card-image">
            <img src={product.image} alt={product.nickname} />
          </div>
          <div className="card-badge">
            {isDiscounted && (
              <Badge color="danger">
                -{product.discount_percentage * 100}%
              </Badge>
            )}
          </div>
          <div className="card-cta">
            {wishlistFilled ? (
              <div className="card-cta show">
                <AiFillHeart
                  className="wishlist-icon"
                  onClick={handleWishlistClick}
                />
              </div>
            ) : (
              <div className="card-cta hidden">
                <AiOutlineHeart
                  className="wishlist-icon"
                  onClick={handleWishlistClick}
                />
              </div>
            )}
          </div>
        </div>
        <div className="card-wrapper">
          <div className="card-container">
            <div className="product-brand">
              <BrandLogo product={product} />
              <span>{product.model}</span>
            </div>
            <h2>{product.nickname}</h2>
            <div className="card-footer">
              <h2>
                $
                {(
                  product.resell_price *
                  (1 - product.discount_percentage)
                ).toFixed(2)}
              </h2>
              {isDiscounted && (
                <span className="product-original-price">
                  ${product.resell_price.toFixed(2)}
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
