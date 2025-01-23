import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useForm } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { useNavigate } from "react-router-dom";


const CheckOut = () => {

    const [pedidoId, setPediddoId] = useState("");
 
    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const { register, handleSubmit } = useForm();

    const navigate = useNavigate();
    
        const comprar = (data) => {
            const pedido = {
                cliente: data,
                productos: carrito,
                total: precioTotal()
            }  
            console.log(pedido);
            
            const pedidosRef = collection(db, "pedidos");

            addDoc(pedidosRef, pedido)
                .then((doc) => {
                    setPediddoId(doc.id);
                    vaciarCarrito([]);
                })  
        }

        const volver = () => {
            navigate('/productos');
        }

        if(pedidoId) {
            return (
                <div className="container">
                    <h1 className="main-title">Muchas gracias por tu compra</h1>
                    <p>Tu numero de pedido es: {pedidoId}</p>
                    <button className="cargar" type="submit" onClick={volver} >Volver al comercio</button>
                </div>
            )
        }

  return (
    <div className="container">
        <h1 className="main-title">Finalizar Compra</h1>

        <form className="formulario" onSubmit={handleSubmit(comprar)}>

            <input 
                type="text" 
                placeholder="Username"
                {...register("nombre")}
            />
            <input 
                type="email" 
                placeholder="email" 
                {...register("email")}
            />
            <input 
                type="phone" 
                placeholder="telefono" 
                {...register("telefono")}
            />
            
            <button className="enviar" 
                type="submit">
                    Comprar
            </button>
        </form>
    </div>
  )
}

export default CheckOut