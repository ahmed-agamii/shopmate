import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
<<<<<<< HEAD
import { CartProvider } from "./context/CartContext";
=======
>>>>>>> 1ab8b41185ff15b9d49295a8eee60d03a5cb2fb0
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
<<<<<<< HEAD
      <CartProvider>
        <App />
      </CartProvider>
=======
      <App />
>>>>>>> 1ab8b41185ff15b9d49295a8eee60d03a5cb2fb0
    </Router>
  </React.StrictMode>
);
