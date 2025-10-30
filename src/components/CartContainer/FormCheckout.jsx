import { useState } from "react";

export default function FormCheckout(props) {
  const [formData, setFormData] = useState({
    username: "",
    phone: "",
    email: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    props.handleCheckout(formData);
  }

  function handleInputChange(event) {
    const value = event.target.value;
    const inputName = event.target.name;
    const newFormData = { ...formData };
    newFormData[inputName] = value;
    setFormData(newFormData);
    formData.username;
  }
  function resetForm() {
    setFormData({
      username: "",
      phone: "",
      email: "",
    });
  }
  return (
    <div>
      <h4>Completa tus datos</h4>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre
          <input
            value={formData.username}
            onChange={handleInputChange}
            name="username"
            type="text"
            placeholder="Nombre"
            required
          />
        </label>
        <label>
          Mail
          <input
            value={formData.email}
            onChange={handleInputChange}
            name="email"
            type="text"
            placeholder="mail@mail.com"
            required
          />
        </label>
        <label>
          Telefono
          <input
            value={formData.phone}
            onChange={handleInputChange}
            name="phone"
            type="tel"
            placeholder="00 12345678"
            required
          />
        </label>

        <button type="submit">Enviar</button>
        <button type="button" onClick={resetForm}>
          Reiniciar formulario
        </button>
      </form>
    </div>
  );
}
