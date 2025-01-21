import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Item = ( {producto} ) => {
  return (
    <div className="producto">
        <img src={producto.imagen} alt={producto.titulo}/>
        <div>
            <h4>{producto.titulo}</h4>
            <p>Precio: $ {producto.precio}</p>
            <p>Categotia: {producto.categoria}</p>
           
            <Link className="ver-mas" to={`/item/${producto.id}`}>ver mas</Link>
        </div>
    </div>
  )
};

Item.propTypes = {
    producto: PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, // Puede ser string o number
      titulo: PropTypes.string.isRequired, // Obligatorio
      imagen: PropTypes.string.isRequired, // Obligatorio y debe ser string
      precio: PropTypes.number.isRequired, // Obligatorio y debe ser número
      categoria: PropTypes.string.isRequired, // Obligatorio y debe ser string
      descripcion: PropTypes.string, // Opcional
    }).isRequired, // `producto` es obligatorio
  };

export default Item;