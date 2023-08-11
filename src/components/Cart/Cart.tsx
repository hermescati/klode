import { BsFillHandbagFill } from "react-icons/bs";
import { Product } from "../../hooks/useProducts";
import "./Cart.css";

interface Props {
  products: Product[];
}

const Cart = ({ products }: Props) => {
  const productCount = products.length;
  const displayedCount = productCount > 9 ? "9+" : productCount;

  return (
    <div className="shopping-cart">
      {productCount !== 0 && (
        <div className="notification-dot">{displayedCount}</div>
      )}
      <BsFillHandbagFill color="#070c15" size="24" />
    </div>
  );
};

export default Cart;
