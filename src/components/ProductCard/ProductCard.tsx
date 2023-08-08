import Badge from "../Badge";
import Button from "../Button";
import styles from "./ProductCard.module.css";
import { FaStar } from "react-icons/fa";

export interface Product {
  image: string;
  name: string;
  description: string;
  rating: number;
  price: number;
  discount: number;
}

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  const isDiscounted = product.discount > 0;
  const discountedPrice = product.price * (1 - product.discount);

  return (
    <div className={styles.card}>
      <div>
        {isDiscounted && <Badge>sale</Badge>}
        <img
          className={styles.cardImage}
          width="296"
          height="260"
          src={product.image}
        />
      </div>
      <div className={styles.cardBody}>
        <div className="d-flex justify-content-between align-items-center">
          <h3 className={styles.cardHeading}>{product.name}</h3>
          <div className="d-flex">
            <FaStar size="16" color="#1D242D" />
            <p className={styles.cardRating}>{product.rating}</p>
          </div>
        </div>
        <div>
          <p className={styles.cardDescription}>{product.description}</p>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <div className={styles.cardPrice}>
            <h6 className={styles.cardDiscount}>
              from ${product.price.toFixed(2)}
            </h6>
            <h5 className={styles.cardPrice}>${discountedPrice.toFixed(2)}</h5>
          </div>
          <Button>Add to cart</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
