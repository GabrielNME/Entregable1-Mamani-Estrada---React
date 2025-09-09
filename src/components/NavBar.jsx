import { ShoppingCart } from "lucide-react";
import "./NavBar.css";
import "./CartWidget.jsx";
import CartWidget from "./CartWidget.jsx";

const NavBar = () => {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">MiEcommerce</div>

      {/* Links */}
      <ul className="navbar-links">
        <li>
          <a href="#">Items1</a>
        </li>
        <li>
          <a href="#">Items2</a>
        </li>
        <li>
          <a href="#">Items3</a>
        </li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
