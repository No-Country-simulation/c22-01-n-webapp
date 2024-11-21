import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    state: "",
    profileImage: null,
    role: "paciente", // Valor por defecto
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData((prev) => ({ ...prev, profileImage: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Las contraseñas no coinciden.");
      setSuccess(false);
      return;
    }

    setSuccess(true);
    setError("");
    console.log("Formulario enviado", formData);
  };

  // Función para redirigir al inicio
  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <section className="h-100 h-custom" style={{ backgroundColor: "#8fc4b7" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-8 col-xl-6">
            <div className="card rounded-3">
              <img
                src="https://www.noticias-medicas.com/wp-content/uploads/2018/09/avances-medicos-tecnologicos.jpg"
                className="w-100"
                style={{
                  borderTopLeftRadius: ".3rem",
                  borderTopRightRadius: ".3rem",
                }}
                alt="Sample photo"
              />
              <div className="card-body p-4 p-md-5">
                <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2 text-center">Registrate</h3>

                <form className="px-md-2" onSubmit={handleSubmit}>
                  {/* Nombre */}
                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      id="formFirstName"
                      className="form-control"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                    <label className="form-label" htmlFor="formFirstName">
                      Nombre
                    </label>
                  </div>

                  {/* Apellido */}
                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      id="formLastName"
                      className="form-control"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                    <label className="form-label" htmlFor="formLastName">
                      Apellido
                    </label>
                  </div>

                  {/* Dirección */}
                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      id="formAddress"
                      className="form-control"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                    />
                    <label className="form-label" htmlFor="formAddress">
                      Dirección
                    </label>
                  </div>

                  {/* Estado */}
                  <div className="form-outline mb-4">
                    <select
                      className="form-select"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                    >
                      <option value="">Seleccionar Estado</option>
                      <option value="Buenos Aires">Buenos Aires</option>
                      <option value="Ciudad Autónoma de Buenos Aires">
                        Ciudad Autónoma de Buenos Aires (CABA)
                      </option>
                      <option value="Catamarca">Catamarca</option>
                      <option value="Chaco">Chaco</option>
                      <option value="Chubut">Chubut</option>
                      <option value="Córdoba">Córdoba</option>
                      <option value="Corrientes">Corrientes</option>
                      <option value="Entre Ríos">Entre Ríos</option>
                      <option value="Formosa">Formosa</option>
                      <option value="Jujuy">Jujuy</option>
                      <option value="La Pampa">La Pampa</option>
                      <option value="La Rioja">La Rioja</option>
                      <option value="Mendoza">Mendoza</option>
                      <option value="Misiones">Misiones</option>
                      <option value="Neuquén">Neuquén</option>
                      <option value="Río Negro">Río Negro</option>
                      <option value="Salta">Salta</option>
                      <option value="San Juan">San Juan</option>
                      <option value="San Luis">San Luis</option>
                      <option value="Santa Cruz">Santa Cruz</option>
                      <option value="Santa Fe">Santa Fe</option>
                      <option value="Santiago del Estero">Santiago del Estero</option>
                      <option value="Tierra del Fuego">Tierra del Fuego</option>
                      <option value="Tucumán">Tucumán</option>
                    </select>
                    <label className="form-label" htmlFor="formState">
                      Estado (Argentina)
                    </label>
                  </div>

                  {/* Foto de perfil */}
                  <div className="form-outline mb-4">
                    <input
                      type="file"
                      id="formProfileImage"
                      className="form-control"
                      name="profileImage"
                      onChange={handleChange}
                    />
                    <label className="form-label" htmlFor="formProfileImage">
                      Subir foto de perfil
                    </label>
                  </div>

                  {/* Rol */}
                  <div className="form-outline mb-4">
                    <select
                      className="form-select"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                    >
                      <option value="paciente">Paciente</option>
                      <option value="medico">Médico</option>
                    </select>
                    <label className="form-label" htmlFor="formRole">
                      Rol
                    </label>
                  </div>

                  {/* Contraseña */}
                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      id="formPassword"
                      className="form-control"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                    <label className="form-label" htmlFor="formPassword">
                      Contraseña
                    </label>
                  </div>

                  {/* Confirmar contraseña */}
                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      id="formConfirmPassword"
                      className="form-control"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                    />
                    <label className="form-label" htmlFor="formConfirmPassword">
                      Confirmar contraseña
                    </label>
                  </div>

                  {/* Botón de registro */}
                  <button type="submit" className="btn btn-primary btn-lg mb-1">
                    Registrarse
                  </button>

                  {error && <div className="text-danger mt-2">{error}</div>}
                  {success && <div className="text-success mt-2">Formulario enviado con éxito!</div>}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;
