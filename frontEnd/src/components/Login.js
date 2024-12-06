// Login.js
import React from 'react';

const Login = () => {
  return (
    <div className="container mt-5">
      <div className="card rounded-3">
        {/* Imagen arriba de todos los elementos */}
        <img
          src="https://www.noticias-medicas.com/wp-content/uploads/2018/09/avances-medicos-tecnologicos.jpg"
          className="w-100"
          style={{
            borderTopLeftRadius: ".3rem",
            borderTopRightRadius: ".3rem",
          }}
          alt="Sample photo"
        />
        {/* Título del formulario */}
        <div className="card-body">
          <h2 className="text-center mb-4">Iniciar sesión</h2>
          
          {/* Formulario */}
          <form>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Correo electrónico</label>
              <input type="email" className="form-control" id="email" required />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Contraseña</label>
              <input type="password" className="form-control" id="password" required />
            </div>
            <button type="submit" className="btn btn-primary w-100">Iniciar sesión</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
