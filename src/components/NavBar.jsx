import { ShoppingCart } from "lucide-react";
import "./NavBar.css";
import "./CartWidget.jsx";
import { useState, useEffect } from "react";
import { Link } from "react-router";
import CartWidget from "./CartWidget";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <Link to="/" className="navbar-logo">
        MiEcommerce
      </Link>

      <ul className="navbar-links">
        <li>
          <Link to="/category/Exterior">Exterior</Link>
        </li>
        <li>
          <Link to="/category/Interiores">Interiores</Link>
        </li>
        <li>
          <Link to="/category/Oficina">Oficina</Link>
        </li>
      </ul>

      <Link to="/cart" className="navbar-cart">
        <CartWidget />
      </Link>
    </nav>
  );
}

export default Navbar;
