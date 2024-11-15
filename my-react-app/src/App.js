import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'; // Importa los estilos de Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Importa el JS de Bootstrap para la funcionalidad del carrusel


import NavBar from './components/navbar';
import Jumbotron from './components/jumbotron';
import DoctorCard from './components/DoctorCard';
import Carrusel from './components/Carrusel';

function App() {
  return (
    <div className="App">
     
        <NavBar />
        <Jumbotron />
        <DoctorCard />      
        <Carrusel />
      
    </div>
  );
}

export default App;
