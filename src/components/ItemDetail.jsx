import PropTypes from 'prop-types';
import ItemCount from './ItemCount';
import { useContext, useState } from 'react';
import { CartContext } from '../context/cartContext';

const ItemDetail = ( {item} ) => {
  
  const { agregarAlCarrito } = useContext(CartContext);
  
  
  const [cantidad, setCantidad] = useState(1);

  const handleSumar = () => {
     cantidad < item.stock && setCantidad (cantidad + 1)
  }

  const handleRestar = () => {
     cantidad > 1 && setCantidad (cantidad - 1)
  }

  return (
    <div className="container">
        <div className="producto-detalle">
            <img src={item.imagen} alt={item.titulo} />
            <div>
                <h3 className="titulo">{item.titulo}</h3>
                <p className="descripcion">{item.descripcion}</p>
                <p className="categoria">Categoria: {item.categoria}</p>
                <p className="precio">Precio: $ {item.precio}</p>
                <ItemCount 
                  cantidad={cantidad} 
                  handleSumar={handleSumar} 
                  handleRestar={handleRestar} 
                  handleAgregar={ () => {agregarAlCarrito(item, cantidad)} }/> 
            </div>
        </div>
    </div>
  )
}

ItemDetail.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    titulo: PropTypes.string.isRequired,
    imagen: PropTypes.string.isRequired,
    precio: PropTypes.number.isRequired,
    categoria: PropTypes.string.isRequired,
    descripcion: PropTypes.string, // Opcional
    stock: PropTypes.number.isRequired, // Agrega la validación para `stock`
  }).isRequired, // Ahora `item` es un objeto obligatorio
};



export default ItemDetail;