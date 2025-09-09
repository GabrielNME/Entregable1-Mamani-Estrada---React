import "./ItemListContainer.css";

export default function ItemListContainer(props) {
  return (
    <div className="item-container">
      <h2>{props.greeting}</h2>
    </div>
  );
}
