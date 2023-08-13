import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import "./Wishlist.css";

interface Props {
  onClick: () => void;
}

const Wishlist = ({ onClick }: Props) => {
  const [status, setStatus] = useState(false);

  const toggle = () => {
    setStatus(!status);
    onClick();
  };

  return status ? (
    <AiFillHeart className="wishlist-icon" color="#070C15" onClick={toggle} />
  ) : (
    <AiOutlineHeart className="wishlist-icon" onClick={toggle} />
  );
};

export default Wishlist;
