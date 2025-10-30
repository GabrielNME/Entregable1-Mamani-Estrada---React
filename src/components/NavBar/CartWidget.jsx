import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { ShoppingCart } from "lucide-react";

function CartWidget() {
  const { totalItems } = useContext(CartContext);

  return (
    <div className="cart-widget">
      <ShoppingCart size={28} />
      {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
    </div>
  );
}

export default CartWidget;
