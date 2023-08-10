import "./ProductCard.css";
import Badge from "../Badge";
import Button from "../Button";
import { Product } from "../../hooks/useProducts";
import { FaStar } from "react-icons/fa";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  const isDiscounted = product.discount > 0;
  const discountedPrice = product.price * (1 - product.discount);

  return (
    <div className="card">
      <div>
        {isDiscounted && <Badge color="danger">sale</Badge>}
        <img className="card-image" alt="product_image" src={product.image} />
        <Badge color="rating">
          <div className="row rating-wrapper">
            <FaStar size="13" color="#1D242D" />
            <p className="product-rating">{product.rating}</p>
          </div>
        </Badge>
      </div>
      <div className="col card-body">
        <p className="product-title">{product.name}</p>
        <p className="product-description">{product.description}</p>
        <div className="row center-between">
          <div className="col price-wrapper">
            {isDiscounted && (
              <p className="product-discount">
                from ${product.price.toFixed(2)}
              </p>
            )}
            <p className="product-price">${discountedPrice.toFixed(2)}</p>
          </div>
          <Button>Add to cart</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
