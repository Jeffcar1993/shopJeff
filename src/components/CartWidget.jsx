import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../context/cartContext"
import { ShoppingCart } from "lucide-react";


const CartWidget = () => {

    const { cantidadCarrito } = useContext(CartContext);

  return (
    <div className='carrito1'>
        <li><Link className='menu-link' to="/carrito"><ShoppingCart /></Link></li>
        <span className="numerito">{cantidadCarrito()}</span>
    </div>
  )
}

export default CartWidget