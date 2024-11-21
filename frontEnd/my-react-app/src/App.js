import React, { useState } from "react";
import NavBar from "./components/navbar"; 
import Jumbotron from "./components/jumbotron";
import RegistrationForm from "./components/RegistrationForm"; 
import Carrusel from "./components/Carrusel";
import DoctorCard from "./components/DoctorCard";
import Footer from "./components/footer";
import "bootstrap/dist/css/bootstrap.min.css";



const App = () => {
  const [showForm, setShowForm] = useState(false); 

  const handleRegisterClick = () => {
    setShowForm(true); 
  };

  return (
    <div>
      
      {!showForm && (
        <>
          <NavBar onRegisterClick={handleRegisterClick} />
          <Jumbotron />
          <DoctorCard />
          <Carrusel />
          <Footer />
          
        </>
      )}

            {showForm && <RegistrationForm />}
    </div>
  );
};

export default App;
