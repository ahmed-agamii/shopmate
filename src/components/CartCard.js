<<<<<<< HEAD
import { useCart } from "../context/CartContext";
import "./CartCard.css";

export const CartCard = ({ product }) => {
  const { removeFromCart } = useCart();
=======
import "./CartCard.css";

export const CartCard = ({ product }) => {
>>>>>>> 1ab8b41185ff15b9d49295a8eee60d03a5cb2fb0
  const { name, price, image } = product;
  return (
    <div className="cartCard">
      <img src={image} alt={name} />
      <p className="productName">{name}</p>
      <p className="productPrice">${price}</p>
<<<<<<< HEAD
      <button onClick={() => removeFromCart(product)}>Remove</button>
=======
      <button>Remove</button>
>>>>>>> 1ab8b41185ff15b9d49295a8eee60d03a5cb2fb0
    </div>
  );
};
