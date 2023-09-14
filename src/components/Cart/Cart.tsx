import { Product } from "../../hooks/useProducts";
import "./Cart.css";

interface Props {
  products: Product[];
}

const Cart = ({ products }: Props) => {
  const uniqueProductIds = new Set<string>();

  const uniqueProducts = products.filter((product) => {
    if (uniqueProductIds.has(product.sku)) {
      return false;
    } else {
      uniqueProductIds.add(product.sku);
      return true;
    }
  });

  const productCount = uniqueProducts.length;
  const displayedCount = productCount > 9 ? "9+" : productCount;

  return (
    <>
      <div className="shopping-cart">
        <div className="item-count">{displayedCount}</div>
      </div>
    </>
  );
};

export default Cart;
