import React from "react";

const NavBar = () => {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid d-flex justify-content-end">
        <button className="btn btn-primary me-2" type="button">Registrarse</button>
        <button className="btn btn-sm btn-outline-secondary" type="button">Iniciar sesión</button>
      </div>
    </nav>
  );
};

export default NavBar;
