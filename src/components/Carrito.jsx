import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { Frown } from "lucide-react";

const Carrito = () => {

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const handleVaciar = () => {
        vaciarCarrito();
    }

  return (
    <div className="container">
        <h1 className="main-title">Carrito</h1>
        {
            carrito.map((prod) => (
                <div key={prod.id}>
                    <img className="icon" src={prod.imagen} alt={prod.titulo} />
                    <h2>{prod.titulo}</h2>
                    <p>categoria: {prod.categoria}</p>
                    <p>Cant: {prod.cantidad}</p>
                    <p>Precio Und: $ {prod.precio}</p>
                    <p>Precio Tot: $ {prod.precio * prod.cantidad}</p>
                    <br />
                </div>
            ))
        }
        {
        carrito.length > 0 ?
            <>
                <h2>Precio Total: $ {precioTotal()}</h2>
                <Link className="enviar" to="/checkout">Finalizar compra</Link>
                <button className="vaciar" onClick={handleVaciar}>Vaciar Carrito</button>
            </> :
            <h2 className="vacio">El carrito esta vacio <Frown /> </h2>
        }
    </div>
  )
}

export default Carrito