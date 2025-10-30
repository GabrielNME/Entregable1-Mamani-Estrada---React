import { useParams } from "react-router";
import { getProductbyId } from "../../data/firebase";
import { useEffect, useState } from "react";
//import "./ItemDetailContainer.css";
import ItemDetail from "../ItemDetail/ItemDetail";

function ItemDetailContainer() {
  const { idParam } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    getProductbyId(idParam)
      .then((response) => setProduct(response))
      .catch((error) => alert(error));
  }, [idParam]);

  if (!product || !product.id) {
    return <p className="loading">Cargando producto...</p>;
  }

  return <ItemDetail product={product} />;
}

export default ItemDetailContainer;
