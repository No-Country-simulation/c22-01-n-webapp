// App.js
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar';
import Jumbotron from './components/jumbotron';
import RegistrationForm from './components/RegistrationForm';
import Carrusel from './components/Carrusel';
import DoctorCard from './components/DoctorCard';
import Footer from './components/footer';
import Login from './components/Login';  // Asegúrate de importar el componente Login
import "bootstrap/dist/css/bootstrap.min.css";
import AgendarCita from './components/AgendarCita';

const App = () => {
  const [showForm, setShowForm] = useState(false);

  const handleRegisterClick = () => {
    setShowForm(true);
  };

  return (
    <div>
      <NavBar onRegisterClick={handleRegisterClick} />
      <Routes>
        <Route path="/" element={
          <>
            <Jumbotron />
            <DoctorCard />
            <Carrusel />
            <Footer />
          </>
        } />
        <Route path="/login" element={<Login />} /> {/* Ruta de login */}
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/agendar-cita" element={<AgendarCita />} />
      </Routes>
    </div>
  );
};

export default App;
