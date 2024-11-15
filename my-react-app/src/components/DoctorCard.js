import React from 'react';

const DoctorCard = () => {
  return (
    <div className="card card text-center mb-3" style={{ width: '13rem' }}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUbz4oJpgUEXE4MI1CoBw3cX6i78rXZ_7Fcw&s" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Dra Daniela Perez</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary">Medicina general</h6>
        <p className="card-text">Descripcion del doctor.</p>
        {/* Usando <button> en lugar de <a> para mejorar accesibilidad */}
        <button className="btn btn-primary" onClick={() => alert('Button clicked')}>Agendar cita</button>
      </div>
    </div>
  );
};

export default DoctorCard;
