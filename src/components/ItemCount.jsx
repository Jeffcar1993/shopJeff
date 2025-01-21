
import PropTypes from 'prop-types';

const ItemCount = ({ cantidad, handleSumar, handleRestar, handleAgregar }) => {
  return (
    <div>
      <div className="item-count">
        <button onClick={handleRestar}>-</button>
        <p>{cantidad}</p>
        <button onClick={handleSumar}>+</button>
      </div>
      <button onClick={handleAgregar} className="agregar-al-carrito">agregar al carrito</button>
    </div>
  );
};

// Definir los prop-types
ItemCount.propTypes = {
  cantidad: PropTypes.number.isRequired, // cantidad debe ser un número y es obligatorio
  handleSumar: PropTypes.func.isRequired, // handleSumar debe ser una función y es obligatorio
  handleRestar: PropTypes.func.isRequired, // handleRestar debe ser una función y es obligatorio
  handleAgregar: PropTypes.func.isRequired, // handleAgregar debe ser una función y es obligatorio
};

export default ItemCount;
