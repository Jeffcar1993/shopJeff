import PropTypes from 'prop-types';
import Item from "./Item";
import { toCapital } from '../helpers/toCapital';

const ItemList = ({ productos, titulo }) => {
  return (
    <div className="container">
      <h2 className="main-title">{toCapital(titulo)}</h2>

      <div className="productos">
        {productos.map((prod) => (
          <Item producto={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
};

// Definir las PropTypes directamente en este archivo
ItemList.propTypes = {
  titulo: PropTypes.string.isRequired, // Aquí definimos que `titulo` es obligatorio y debe ser una cadena
  productos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      titulo: PropTypes.string.isRequired,
      imagen: PropTypes.string.isRequired,
      precio: PropTypes.number.isRequired,
      categoria: PropTypes.string.isRequired,
      descripcion: PropTypes.string, // Opcional
    })
  ).isRequired, // El array `productos` es obligatorio
};

export default ItemList;
