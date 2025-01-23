import { useForm } from "react-hook-form";

const Contacto = () => {

    const { register, handleSubmit, reset } = useForm();

    const enviar = (data) => {
        console.log(data);
        alert("¡Mensaje enviado exitosamente!");
        reset();
    }

  return (
    <div className="container">
        <h1 className="main-title">Contacto</h1>

        <form className="formulario" onSubmit={handleSubmit(enviar)}>

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
            <textarea
                    placeholder="Escribe tu mensaje aquí..."
                    rows="3"
                    className="area"
                    {...register("mensaje", { required: "El mensaje es obligatorio" })}
                ></textarea>
            <button className="enviar" 
                type="submit">
                    Enviar
            </button>
        </form>
    </div>
  )
}

export default Contacto