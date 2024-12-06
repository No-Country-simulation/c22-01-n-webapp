import React from 'react';
import './NavBar.css';

const DoctorCard = () => {
  return (
    <div className="d-flex  mt-4">
      <div className="card text-center mb-3 pt-2" style={{ width: '12rem', border: '2px solid #17a2b8', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)' }}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUbz4oJpgUEXE4MI1CoBw3cX6i78rXZ_7Fcw&s"
          className="card-img-top"
          alt="Doctor"
          style={{ height: '150px', objectFit: 'cover' }}
        />
        <div className="card-body">
          <h5 className="card-title">Dra Daniela Perez</h5>
          <h6 className="card-subtitle mb-2 text-muted">Medicina General</h6>
          <p className="card-text" style={{ fontSize: '0.9rem' }}>Descripción del doctor.</p>


          <button
            className="btn btn-info text-white border-0 rounded-3 shadow-lg btn-agendar"
            onClick={() => alert('Agendar cita')}
          >
            Agendar cita
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
