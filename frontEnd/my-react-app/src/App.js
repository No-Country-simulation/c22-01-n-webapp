import React, { useState } from "react";
import NavBar from "./components/navbar"; 
import Jumbotron from "./components/jumbotron";
import RegistrationForm from "./components/RegistrationForm"; 
import Carrusel from "./components/Carrusel";
import DoctorCard from "./components/DoctorCard";
import Footer from "./components/footer";
import Login from "./components/Login";
import AgendarCita from "./components/AgendarCita";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";  // Importa Routes y Route

const App = () => {
  const [showForm, setShowForm] = useState(false); 

  const handleRegisterClick = () => {
    setShowForm(true); 
  };

  return (
    <div>
      {/* Ya no necesitas el Router aquí */}
      <NavBar onRegisterClick={handleRegisterClick} />
      <Routes>
        {/* Define las rutas para las diferentes vistas */}
        <Route path="/" element={<>
          <Jumbotron />
          <DoctorCard />
          <Carrusel />
          <Footer />
        </>} />

        <Route path="/login" element={<Login />} />  {/* Ruta para login */}
        <Route path="/agendar-cita" element={<AgendarCita />} />  {/* Ruta para agendar cita */}
        
        {/* Condición para mostrar el formulario de registro */}
        <Route path="/register" element={showForm ? <RegistrationForm /> : <></>} /> 
      </Routes>
    </div>
  );
};

export default App;
