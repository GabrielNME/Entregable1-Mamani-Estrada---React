import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { createOrder } from "../../data/firebase";
import FormCheckout from "./FormCheckout";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import "./CartContainer.css";

function CartContainer() {
  const { cart, removeItem, clearCart } = useContext(CartContext);

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  async function handleCheckout(formData) {
    const orderData = {
      buyer: formData,
      items: cart,
      price: totalPrice,
      date: new Date(),
    };
    console.log("llamando a firebase...", formData);
    const newOrder = await createOrder(orderData);
    clearCart();
    Swal.fire({
      icon: "success",
      title: "¡Compra realizada con éxito!",
      html: `
    <p><strong>ID de la orden:</strong> ${newOrder.id}</p>
    <p><strong>Total abonado:</strong> $${totalPrice}</p>
  `,
      confirmButtonText: "Aceptar",
      confirmButtonColor: "#2ecc71",
    });
  }

  return (
    <div className="cart-container">
      {cart.length > 0 ? (
        <>
          <h3 className="cart-title">Tu carrito</h3>
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img
                  src={item.img}
                  alt={item.title}
                  className="cart-item-img"
                />
                <h4 className="cart-item-title">{item.title}</h4>
                <p className="cart-item-qty">x{item.quantity}</p>
                <p className="cart-item-price">${item.price * item.quantity}</p>
                <button
                  className="cart-remove-btn"
                  onClick={() => removeItem(item.id)}
                >
                  <FaTrashAlt />
                </button>
              </div>
            ))}
          </div>

          <div className="cart-total">
            <h4>Total: ${totalPrice}</h4>
          </div>

          <div className="checkout-section">
            <FormCheckout handleCheckout={handleCheckout} />
          </div>
        </>
      ) : (
        <p className="empty-cart-msg">
          Tu carrito está vacío. ¡Agrega productos para continuar con la compra!
        </p>
      )}
    </div>
  );
}

export default CartContainer;
