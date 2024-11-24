// NavBar.js
import React from "react";
import { Link } from "react-router-dom"; // Importar Link para la navegación
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid d-flex justify-content-between">
        <a className="navbar-brand text-white" href="/">
          Vitalia
        </a>
        <div>
          {/* Usamos Link para redirigir al formulario de registro */}
          <Link to="/register">
            <button
              className="p-2 me-2 btn btn-info text-white border-0 rounded-3 shadow-lg"
              type="button"
            >
              Registrarse
            </button>
          </Link>

          {/* Usamos Link para redirigir al Login */}
          <Link to="/login">
            <button
              className="p-2 btn btn-info text-white border-0 rounded-3 shadow-lg"
              type="button"
            >
              Iniciar sesión
            </button>
          </Link>

          {/* Botón que lleva al formulario de agendar cita */}
          <Link to="/agendar-cita">
            <button
              className="p-2 ms-3 btn btn-info text-white border-0 rounded-3 shadow-lg"
              type="button"
            >
              Agendar Cita
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
