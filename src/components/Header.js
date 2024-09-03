import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";
<<<<<<< HEAD
import { useCart } from "../context/CartContext";
import "./Header.css";

export const Header = () => {
  const { cartList } = useCart();
=======
import "./Header.css";

export const Header = () => {
>>>>>>> 1ab8b41185ff15b9d49295a8eee60d03a5cb2fb0
  return (
    <header>
      <Link to="/" className="logo">
        <img src={Logo} alt="Shopmate Logo" />
        <span>Shopping Cart</span>
      </Link>
      <nav className="navigation">
        <NavLink to="/" className="link" end>
          Home
        </NavLink>
        <NavLink to="/cart" className="link">
          Cart
        </NavLink>
      </nav>
      <Link to="/cart" className="items">
<<<<<<< HEAD
        <span>Cart: {cartList.length}</span>
=======
        <span>Cart: 2</span>
>>>>>>> 1ab8b41185ff15b9d49295a8eee60d03a5cb2fb0
      </Link>
    </header>
  );
};
