import PropTypes from 'prop-types';
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Login = ( {setUser} ) => {

    const { register, handleSubmit, reset } = useForm();
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');

    const ingresar = (data) => {

        const { usuario, password } = data;

        const validCredentials = {
            usuario: 'admin',
            password: '1234',
          };

        if(usuario === validCredentials.usuario && password === validCredentials.password) {
            localStorage.setItem('user', JSON.stringify(validCredentials));
            setUser(validCredentials);
            navigate('/ingresarproductos');
            setErrorMessage('');
        } else {
            setErrorMessage('Credenciales incorrectas intentalo de nuevo')
            reset();
        }
    }

  return (
    <div className="container"> 

        <h1 className="main-title">Bienvenido Administrador</h1>

        <form className="formulario" onSubmit={handleSubmit(ingresar)}>

            <input 
                type="text"
                placeholder="usuario"
                {...register('usuario', { required: 'El usuario es obligatorio' })}
            />
            
            <input 
                type="password"
                placeholder="password"
                {...register('password', { required: 'La contraseña es obligatoria' })}
            />

            {errorMessage && <p className="error">{errorMessage}</p>}

            <button className="enviar" type="submit">Ingresar</button>
        
        </form>
        
    </div>
  )
}

Login.propTypes = {
    setUser: PropTypes.func.isRequired // Obligatorio y de tipo booleano
};

export default Login