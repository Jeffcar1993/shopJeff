import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { ShoppingCart } from "lucide-react";


const CartWidget = () => {

    const { cantidadCarrito } = useContext(CartContext);

  return (
    <div className='carrito1'>
        <span><Link className='menu-link' to="/carrito"><ShoppingCart /></Link></span>
        <span className="numerito">{cantidadCarrito()}</span>
    </div>
  )
}

export default CartWidget