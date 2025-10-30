// src/context/CartContext.jsx
import { createContext, useState } from "react";
import Swal from "sweetalert2";

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
    Swal.fire({
      title: "¡Producto agregado!",
      text: `Se ha agregado ${quantity} ${product.title}${
        quantity > 1 ? "s" : ""
      } al carrito.`,
      icon: "success",
      confirmButtonText: "Aceptar",
      confirmButtonColor: "#28a745",
      timer: 2000,
      timerProgressBar: true,
      showConfirmButton: false,
      position: "top-end",
      toast: true,
    });
  };

  // Eliminar un producto específico
  const removeItem = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  // Vaciar todo el carrito
  const clearCart = () => {
    setCart([]);
  };

  // Total de unidades
  const getTotalQuantity = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  };

  // Total en precio
  const getTotalPrice = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };
  // 👇 cantidad total de productos en el carrito
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeItem,
        clearCart,
        getTotalQuantity,
        getTotalPrice,
        totalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
