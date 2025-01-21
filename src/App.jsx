
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import NavBar from "./components/NavBar";
import "./main.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nosotros from "./components/Nosotros";
import Contacto from "./components/Contacto";
import Carrito from "./components/Carrito";
import { CartProvider } from "./context/cartContext";
import CheckOut from "./components/CheckOut";

const App = () => {

  return (
    
    <CartProvider>

      <BrowserRouter>

        <NavBar />

        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer/>} />
          <Route path="/productos" element={<ItemListContainer/>} />
          <Route path="/productos/:categoria" element={<ItemListContainer/>} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/checkout" element={<CheckOut />} />
        </Routes>

      </BrowserRouter>
    
    </CartProvider>
    
  )
}

export default App;