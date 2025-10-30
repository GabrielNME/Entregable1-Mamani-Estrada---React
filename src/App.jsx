import "./App.css";
import Navbar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router";
import app, { getProducts } from "./data/firebase";
import ItemDetailcontainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import CartContainer from "./components/CartContainer/cartContainer";

export default function App() {
  console.log("Init Firebase", app);
  getProducts();
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<ItemListContainer greeting="Bienvenidos" />}
        />
        <Route path="/category/:categParam" element={<ItemListContainer />} />
        <Route path="/producto/:idParam" element={<ItemDetailcontainer />} />
        <Route path="/cart" element={<CartContainer />} />
        <Route path="*" element={<h1>404:Pagina no encontrada</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
