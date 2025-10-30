import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";

function ItemDetail({ product }) {
  const [addedToCart, setAddedToCart] = useState(false);
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (quantity) => {
    addToCart(product, quantity);
    setAddedToCart(true);
  };

  return (
    <div className="item-detail-container">
      <div className="item-detail-img">
        <img src={product.img} alt={product.title} />
      </div>

      <div className="item-detail-info">
        <h2>{product.title}</h2>
        <h3 className="price">Precio por unidad: ${product.price}</h3>
        <p className="stock">Stock disponible: {product.stock}</p>

        {!addedToCart ? (
          <ItemCount
            stock={product.stock}
            initial={1}
            onAdd={handleAddToCart}
          />
        ) : (
          <div className="after-add">
            <p>✅ Producto agregado al carrito</p>
            <Link to="/cart">
              <button className="btn buy">TERMINAR COMPRA</button>
            </Link>
            <Link to="/">
              <button className="btn still">SEGUIR COMPRANDO</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default ItemDetail;
