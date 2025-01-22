import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import NavBar from "./components/NavBar";
import "./main.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nosotros from "./components/Nosotros";
import Contacto from "./components/Contacto";
import Carrito from "./components/Carrito";
import { CartProvider } from "./context/CartContext";
import CheckOut from "./components/CheckOut";
import Login from "./components/Login";
import IngresoProductos from "./components/IngresoProductos";
import ProtectedRoute from "./components/Utils/ProtectedRoute";
import { useEffect, useState } from "react";

const App = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    setUser(storedUser);
}, []);


  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/productos" element={<ItemListContainer />} />
          <Route path="/productos/:categoria" element={<ItemListContainer />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/login" element={<Login setUser={setUser}/>} />

          {/* Rutas protegidas */}
          <Route
            element={
              <ProtectedRoute
                canActivate={!!user} // Verifica si hay un usuario en localStorage
                redirectPath="/login"
              />
            }
          >
            <Route path="/ingresarproductos" element={<IngresoProductos />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
