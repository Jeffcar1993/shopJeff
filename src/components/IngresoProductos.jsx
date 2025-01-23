import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase/config";

const IngresoProductos = () => {

    const [productoId, setProductoId] = useState("");
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');

    const cargar = async (data) => {
        try {
            const nuevoProducto = collection(db, "productos");
    
            // Construimos el objeto a guardar en la colección
            const producto = {
                titulo: data.titulo,
                categoria: data.categoria,
                descripcion: data.descripcion,
                precio: Number(data.precio), // Convertimos a número
                stock: Number(data.stock),  // Convertimos a número
                imagen: data.imagen, // Asignamos el nombre del archivo si existe
            };
    
            // Guardamos el producto en Firebase
            const docRef = await addDoc(nuevoProducto, producto);
            setProductoId(docRef.id); // Guardamos el ID del documento
    
            alert("¡Producto cargado exitosamente!");
            reset(); // Limpiamos el formulario
            setErrorMessage(""); // Limpiamos mensajes de error
        } catch (error) {
            console.error("Error al cargar producto: ", error);
            setErrorMessage("Ocurrió un error. Debes llenar todos los campos.");
        }
    };

    const salir = () => {
        localStorage.removeItem('user');
        navigate('/productos');
    };

    const cargarNuevoProducto = () => {
        setProductoId(""); // Reinicia el estado del producto cargado
        reset(); // Limpia el formulario
    };
    

    if(productoId) {
        return (
            <div className="container">
                <h1 className="main-title">Producto cargado exitosamente !</h1>
                <p>Tu numero de producto es: {productoId}</p>
                <button className="cargar" type="submit" onClick={cargarNuevoProducto}>Cargar nuevo producto</button>
                <button className="enviar" type="button" onClick={salir}>Salir</button>
            </div>
        )
    }

    return (
        <div className="container">
            <form className="formulario" onSubmit={handleSubmit(cargar)}>
                <h1 className="main-title">Panel de ingreso de productos</h1>

                <input 
                    type="text" 
                    placeholder="titulo"
                    {...register('titulo', { required: 'El título es obligatorio' })}
                />
                {errors.titulo && <p className="error">{errors.titulo.message}</p>}

                <select
                    className="select"
                    {...register("categoria", { required: "La categoría es obligatoria" })}
                    defaultValue=""
                >
                    <option value="" disabled>
                        Selecciona una categoría
                    </option>
                    <option value="medias">Medias</option>
                    <option value="pantalones">Pantalones</option>
                    <option value="remeras">Remeras</option>
                    <option value="buzos">Buzos</option>
                </select>
                {errors.categoria && <p className="error">{errors.categoria.message}</p>}

                <input 
                    type="text" 
                    placeholder="descripción"
                    {...register('descripcion', { required: 'La descripción es obligatoria' })}
                />
                {errors.descripcion && <p className="error">{errors.descripcion.message}</p>}

                <input 
                    type="number" 
                    placeholder="precio"
                    {...register('precio', { required: 'El precio es obligatorio' })}
                />
                {errors.precio && <p className="error">{errors.precio.message}</p>}

                <input 
                    type="number" 
                    placeholder="stock"
                    {...register('stock', { required: 'El stock es obligatorio' })}
                />
                {errors.stock && <p className="error">{errors.stock.message}</p>}
                
                <input 
                    type="text"
                    placeholder="url de imagen" 
                    {...register('imagen', { required: 'La imagen es obligatoria' })}
                />

                {errorMessage && <p className="error">{errorMessage}</p>}

                <button className="cargar" type="submit">Cargar producto</button>
                <button className="enviar" type="button" onClick={salir}>Salir</button>
            </form>
        </div>
    );
};

export default IngresoProductos;
