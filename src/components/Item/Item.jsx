import "./Item.css";
import { Link } from "react-router";

function Item({ id, title, img, price }) {
  return (
    <div className="card">
      <img src={img} alt={title} />
      <Link to={`/producto/${id}`}>{title}</Link>
      <h3>{price}$</h3>
    </div>
  );
}

export default Item;
