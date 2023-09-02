import "./BrandLogo.css";
import {
  SiNike,
  SiJordan,
  SiNewbalance,
  SiPuma,
  SiAdidas,
} from "react-icons/si";
import { Product } from "../../hooks/useProducts";

interface Props {
  product: Product;
}

export const BrandLogo = ({ product }: Props) => {
  if (product.brand == "Nike") return <SiNike />;
  if (product.brand == "Jordan") return <SiJordan />;
  if (product.brand == "New Balance") return <SiNewbalance />;
  if (product.brand == "Puma") return <SiPuma />;
  if (product.brand == "Adidas") return <SiAdidas />;
};
