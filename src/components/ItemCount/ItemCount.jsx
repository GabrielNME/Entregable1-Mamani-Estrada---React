import { useState } from "react";
import "./ItemCount.css";

function ItemCount({ stock, initial = 1, onAdd }) {
  const [quantity, setQuantity] = useState(initial);

  const increase = () => {
    if (quantity < stock) setQuantity(quantity + 1);
  };

  const decrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div className="item-count">
      <div className="counter">
        <button onClick={decrease}>-</button>
        <span>{quantity}</span>
        <button onClick={increase}>+</button>
      </div>

      <button
        className="btn cart"
        onClick={() => onAdd(quantity)}
        disabled={stock === 0}
      >
        {stock === 0 ? "Sin stock" : "Agregar al carrito"}
      </button>
    </div>
  );
}

export default ItemCount;
