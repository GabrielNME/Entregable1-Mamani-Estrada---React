import "./App.css";
import Navbar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router";
import ItemDetailcontainer from "./components/ItemDetailContainer";

function App() {
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
        <Route path="*" element={<h1>404:Pagina no encontrada</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
