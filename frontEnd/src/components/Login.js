// Login.js
import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevenir el comportamiento por defecto del formulario

    try {
      const response = await axios.post("http://localhost:4000/user/login", {
        email,
        password,
      });

      if (response.status === 200) {
        // Inicio de sesión exitoso! (redirigir o mostrar mensaje)
        console.log("Inicio de sesión exitoso!");
      } else {
        // Manejar error de inicio de sesión
        console.error("Error al iniciar sesión");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

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
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Correo electrónico
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Contraseña
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Iniciar sesión
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
