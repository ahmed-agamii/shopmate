<<<<<<< HEAD
import { useCart } from "../context/CartContext";
import { UseTitles } from "../hooks/UseTitles";
import { CartCard } from "../components";
// import { useContext } from "react";

export const Cart = () => {
  const { total, cartList } = useCart();

  UseTitles("Cart");

  return (
    <main>
      <section className="cart">
        <h1>
          cart items: {cartList.length} / ${total}
        </h1>
        {cartList.map((product) => (
=======
import { UseTitles } from "../hooks/UseTitles";
import { CartCard } from "../components";

export const Cart = () => {
  UseTitles("Cart");
  const products = [
    {
      id: 1,
      name: "Sony Wh-Ch510 Bluetooth Wireless",
      price: 149,
      image: "/assets/images/1001.png",
    },
    {
      id: 2,
      name: "boAt Rockerz 450",
      price: 49,
      image: "/assets/images/1002.png",
    },
  ];
  return (
    <main>
      <section className="cart">
        <h1>cart items: {products.length}</h1>
        {products.map((product) => (
>>>>>>> 1ab8b41185ff15b9d49295a8eee60d03a5cb2fb0
          <CartCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
};
