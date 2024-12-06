import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RegistrationForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    state: "",
    dni: "",
    email: "",
    phone: "",
    age: "",
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validación de contraseñas
    if (formData.password !== formData.confirmPassword) {
      setError("Las contraseñas no coinciden.");
      setSuccess(false);
      return;
    }

    setSuccess(true);
    setError("");

    try {
      // Crear un objeto FormData para enviar los datos como 'multipart/form-data'
      const formDataToSubmit = new FormData();
      formDataToSubmit.append("firstName", formData.firstName);
      formDataToSubmit.append("lastName", formData.lastName);
      formDataToSubmit.append("address", formData.address);
      formDataToSubmit.append("state", formData.state);
      formDataToSubmit.append("dni", formData.dni);
      formDataToSubmit.append("email", formData.email);
      formDataToSubmit.append("phone", formData.phone);
      formDataToSubmit.append("age", formData.age);
      formDataToSubmit.append("profileImage", formData.profileImage); // Para la imagen de perfil
      formDataToSubmit.append("role", formData.role);
      formDataToSubmit.append("password", formData.password);

      // Realizar la solicitud POST al backend con multipart/form-data
      const response = await axios.post("http://localhost:4000/user/register", formDataToSubmit, {
        headers: {
          "Content-Type": "multipart/form-data", // Especificamos el tipo de contenido para archivos
        },
      });

      // Si la respuesta es exitosa
      if (response.status === 201) {
        setSuccess(true);
        setError("");
        alert("Usuario registrado con éxito.");
        navigate("/login"); // Redirigir a la página de login
      }
    } catch (err) {
      setSuccess(false);
      if (err.response && err.response.data) {
        setError(err.response.data.message || "Hubo un error en el registro.");
      } else {
        setError("Hubo un error al registrar el usuario. Por favor, intente nuevamente.");
      }
      console.error("Error en el registro:", err);
    }
  };

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <section className="h-100 h-custom">
      <div className="container py-5 h-80">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-8 col-xl-6">
            <div className="card rounded-3">
              <img
                src="https://www.noticias-medicas.com/wp-content/uploads/2018/09/avances-medicos-tecnologicos.jpg"
                className="w-70"
                style={{
                  borderTopLeftRadius: ".3rem",
                  borderTopRightRadius: ".3rem",
                }}
                alt="Sample photo"
              />
              <div className="card-body p-4 p-md-5">
                <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2 text-center">
                  Registrate
                </h3>

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

                  {/* DNI */}
                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      id="formDni"
                      className="form-control"
                      name="dni"
                      value={formData.dni}
                      onChange={handleChange}
                    />
                    <label className="form-label" htmlFor="formDni">
                      DNI
                    </label>
                  </div>

                  {/* Email */}
                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="formEmail"
                      className="form-control"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    <label className="form-label" htmlFor="formEmail">
                      Email
                    </label>
                  </div>

                  {/* Teléfono */}
                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      id="formPhone"
                      className="form-control"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                    <label className="form-label" htmlFor="formPhone">
                      Teléfono
                    </label>
                  </div>

                  {/* Edad */}
                  <div className="form-outline mb-4">
                    <input
                      type="number"
                      id="formAge"
                      className="form-control"
                      name="age"
                      value={formData.age}
                      onChange={handleChange}
                    />
                    <label className="form-label" htmlFor="formAge">
                      Edad
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
                      {/* Opciones de estado omitidas para brevedad */}
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
                  {success && <div className="text-success mt-2">Registro exitoso</div>}
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
