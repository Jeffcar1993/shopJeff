

const Nosotros = () => {
  return (
    <div className="nosotros-container">
      <h1 className="main-title">Sobre Nosotros</h1>
      <p className="nosotros-descripcion">
        Bienvenido a <strong>ShopJeff</strong>, tu tienda de ropa en línea de prueba. 
        Aquí simulamos una experiencia de compra en la que puedes explorar las últimas tendencias, 
        desde ropa casual hasta estilos elegantes para cualquier ocasión.
      </p>
      <section className="nosotros-seccion">
        <h2 className="nosotros-subtitulo">Nuestra Misión</h2>
        <p>
          Nuestro objetivo es brindarte una experiencia de compra única, combinando moda y funcionalidad. 
          Queremos que experimentes cómo sería navegar por una tienda en línea de manera fluida y moderna.
        </p>
      </section>
      <section className="nosotros-seccion">
        <h2 className="nosotros-subtitulo">¿Qué Ofrecemos?</h2>
        <ul className="nosotros-lista">
          <li>Ropa para hombres, mujeres y niños.</li>
          <li>Accesorios que complementan tu estilo.</li>
          <li>Filtros para encontrar fácilmente lo que buscas.</li>
          <li>Un carrito de compras funcional y dinámico.</li>
        </ul>
      </section>
      <section className="nosotros-seccion">
        <h2 className="nosotros-subtitulo">Contáctanos</h2>
        <p>
          Si tienes alguna pregunta o sugerencia, no dudes en ponerte en contacto con nosotros. 
          Esta tienda es un proyecto de prueba, pero estamos aquí para ayudarte a aprender y mejorar.
        </p>
      </section>
    </div>
  );
};

export default Nosotros;
