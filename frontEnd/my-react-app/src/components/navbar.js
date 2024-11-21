import React from "react";
import "./NavBar.css"; // Asegúrate de tener este archivo CSS

const NavBar = ({ onRegisterClick }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid d-flex justify-content-between">
        <a   className="navbar-brand text-white" href="/">
          Vitalia
        </a>
        <div>
          {/* Botón de Registrarse */}
          <button
            className="p-2 me-2 btn btn-info text-white border-0 rounded-3 shadow-lg"
            type="button"
            onClick={onRegisterClick}
          >
            Registrarse
          </button>

          {/* Botón de Iniciar sesión */}
          <button
            className="p-2 btn btn-info text-white border-0 rounded-3 shadow-lg"
            type="button"
          >
            Iniciar sesión
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;