import { useParams } from "react-router";
import { getProductbyId } from "../data/mockAPI";
import { useEffect, useState } from "react";
import "./ItemDetailContainer.css";

function ItemDetailContainer() {
  const { idParam } = useParams();
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    getProductbyId(idParam)
      .then((response) => setProduct(response))
      .catch((error) => alert(error));
  }, [idParam]);

  const increase = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  if (!product || !product.id) {
    return <p className="loading">Cargando producto...</p>;
  }

  return (
    <div className="item-detail-container">
      <div className="item-detail-img">
        <img src={product.img} alt={product.title} />
      </div>

      <div className="item-detail-info">
        <h2>{product.title}</h2>
        <h3 className="price">Precio: ${product.price}</h3>
        <p className="stock">Stock disponible: {product.stock}</p>

        <div className="buttons">
          <button className="btn buy">COMPRAR AHORA</button>
          <button className="btn cart">AGREGAR AL CARRITO</button>
        </div>

        <div className="counter">
          <button onClick={decrease}>-</button>
          <span>{quantity}</span>
          <button onClick={increase}>+</button>
        </div>
      </div>
    </div>
  );
}

export default ItemDetailContainer;
