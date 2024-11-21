import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom'; // Importa BrowserRouter

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router> {/* Envuelve la aplicación con Router */}
      <App />
    </Router>
  </React.StrictMode>
);

// Si deseas comenzar a medir el rendimiento en tu app, pasa una función
// para registrar resultados (por ejemplo: reportWebVitals(console.log))
// o envíalo a un punto de análisis. Aprende más en: https://bit.ly/CRA-vitals
reportWebVitals();
