import "./ItemListContainer.css";
import Item from "./Item";
import getMockAPIData, { getProductsbyCateg } from "../data/mockAPI";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function ItemListContainer(props) {
  const [products, setProducts] = useState([]);
  const { categParam } = useParams();

  useEffect(() => {
    if (categParam) {
      getProductsbyCateg(categParam).then((productsbyCateg) =>
        setProducts(productsbyCateg)
      );
    } else {
      getMockAPIData()
        .then((productList) => {
          console.log("Promesa cumplida");
          setProducts(productList);
        })
        .catch((error) => {
          console.log("Error solicitando los datos", error);
          alert("Algo salio mal buscando los productos");
        })
        .finally(() => {
          console.log("Esto se ejecuta siempre");
        });
    }
  }, [categParam]);

  return (
    <div className="item-container">
      <h1>{props.greeting}</h1>
      {products.length === 0 ? "Cargando..." : ""}
      <div>
        <div>
          <div className="products-grid">
            {products.map((item) => (
              <Item key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
