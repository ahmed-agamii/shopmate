<<<<<<< HEAD
import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import "./ProductCard.css";

export const ProductCard = ({ product }) => {
  const { cartList, addToCart, removeFromCart } = useCart();
  const [isInCart, setIsInCart] = useState(false);

  const { id, name, price, image } = product;
  useEffect(() => {
    const productIsInCart = cartList.find((cartItem) => cartItem.id === id);
    if (productIsInCart) {
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }
  }, [cartList, id]);

=======
import "./ProductCard.css";

export const ProductCard = ({ product }) => {
  const { name, price, image } = product;
>>>>>>> 1ab8b41185ff15b9d49295a8eee60d03a5cb2fb0
  return (
    <div className="productCard">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>
<<<<<<< HEAD
        {isInCart ? (
          <button className="remove" onClick={() => removeFromCart(product)}>
            Remove
          </button>
        ) : (
          <button onClick={() => addToCart(product)}>Add To Cart</button>
        )}
=======
        <button>Add To Cart</button>
>>>>>>> 1ab8b41185ff15b9d49295a8eee60d03a5cb2fb0
      </div>
    </div>
  );
};
