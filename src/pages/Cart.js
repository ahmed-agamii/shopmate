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
          <CartCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
};
