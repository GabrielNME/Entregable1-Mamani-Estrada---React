import { ShoppingCart } from "lucide-react";
export default function CartWidget() {
  return (
    <div className="navbar-cart">
      <ShoppingCart size={28} />
      <span className="cart-badge">3</span>
    </div>
  );
}
