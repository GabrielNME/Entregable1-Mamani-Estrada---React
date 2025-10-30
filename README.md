# 🛍️ Ecommerce React

Proyecto final del curso de React en CoderHouse, desarrollado por
**Gabriel Mamani Estrada**.\
Este proyecto consiste en una aplicación E-commerce donde
el usuario puede navegar por los productos, ver detalles individuales,
agregar ítems al carrito y realizar una orden de compra con sus datos
personales a modo de formulario.

---

## 🚀 Características principales

- Listado dinámico de productos obtenidos desde una base de datos en Firestore
  (firestore.js).
- Vista detallada de cada producto con control de cantidad y stock
  disponible.
- Sistema de carrito funcional con:
  - Agregado y eliminación de productos.
  - Cálculo automático del total.
  - Limpieza completa del carrito.
- Formulario de checkout para ingresar datos del comprador.
- Generación de órdenes en **Firebase Firestore** con ID única.
- Mensajes estilizados con **SweetAlert2** al confirmar la compra.
- Navegación mediante **React Router DOM**.
- Iconografía integrada con **React Icons**.

---

## 🧩 Tecnologías utilizadas

---

Herramienta Descripción

---

**React + Vite** Entorno de desarrollo rápido y
moderno para React.

**Firebase** Base de datos en la nube utilizada
para almacenar las órdenes.

**SweetAlert2** Librería para mostrar alertas y
notificaciones visualmente
atractivas.

**React Router DOM** Sistema de enrutamiento para
navegación entre vistas.

**React Icons** Íconos personalizados y adaptables
para componentes UI.

---

---

## ⚙️ Instalación y ejecución

1.  Clonar el repositorio:

    ```bash
    git clone https://github.com/tuusuario/ecommerce-react.git
    ```

2.  Acceder al directorio del proyecto:

    ```bash
    cd ecommerce-react
    ```

3.  Instalar dependencias:

    ```bash
    npm install
    ```

4.  Ejecutar el proyecto en entorno de desarrollo:

    ```bash
    npm run dev
    ```

5.  Abrir en el navegador:

        http://localhost:5173/

---

## 🗂️ Estructura del proyecto

    src/
    │
    ├── components/
    │   ├── CartContext/          # Contexto global del carrito
    │   ├── CartContainer/        # Visualización y gestión del carrito
    │   ├── CheckoutForm/         # Formulario de compra
    │   ├── Item/                 # Componente individual de producto
    │   ├── ItemList/             # Listado general de productos
    │   ├── ItemDetail/           # Detalle del producto
    │   └── ItemCount/            # Controlador de cantidad (contador)
    │
    ├── data/
    │   ├── mockAPI.js            # Simulación de API de productos
    │   └── firebase.js           # Configuración de Firebase
    │
    ├── App.jsx                   # Estructura principal de la app
    ├── main.jsx                  # Punto de entrada de React
    └── index.css                 # Estilos globales

---

## 🧾 Funcionalidades del carrito

- **Agregar al carrito:** se guarda el producto seleccionado junto a
  su cantidad.
- **Eliminar producto:** mediante ícono de papelera (_React Icons_).
- **Vaciar carrito:** borra todos los ítems con confirmación.
- **Total dinámico:** se actualiza automáticamente según el contenido.
- **Finalizar compra:** genera una orden con ID único en Firebase y
  muestra confirmación con **SweetAlert2**.

---

## 📜 Autor

**Gabriel Mamani Estrada**\
Desarrollador Frontend \| Proyecto final React -- CoderHouse

---

## 🪪 Licencia

Este proyecto fue desarrollado con fines educativos y puede ser
utilizado como referencia o base para otros proyectos personales.

---
