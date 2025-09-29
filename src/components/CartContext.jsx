// src/context/CartContext.jsx
import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity) => {
    const exists = cart.find((item) => item.id === product.id);

    if (exists) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity }]);
    }
  };

  const clearCart = () => setCart([]);
  const removeFromCart = (id) => setCart(cart.filter((item) => item.id !== id));

  // 👇 cantidad total de productos en el carrito
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, clearCart, removeFromCart, totalItems }}
    >
      {children}
    </CartContext.Provider>
  );
}
