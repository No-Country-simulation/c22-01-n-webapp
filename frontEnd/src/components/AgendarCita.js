import React, { useState } from 'react';
import './AgendarCita.css';

const AgendarCita = () => {
    const [formData, setFormData] = useState({
        agendarCita: '',
        fecha: '',
        hora: '',
        tipoCita: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Datos enviados:', formData);
    };

    return (
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
            <div className="agendar-form-container">
                <h2 className="text-center mb-4">Agendar Cita</h2>

                <form onSubmit={handleSubmit} className="agendar-form">
                    <div className="mb-3">
                        <div className="card rounded-3">
                            <img
                                src="https://www.noticias-medicas.com/wp-content/uploads/2018/09/avances-medicos-tecnologicos.jpg"
                                className="w-100" // Cambié de w-70 a w-100
                                style={{
                                    borderTopLeftRadius: ".3rem",
                                    borderTopRightRadius: ".3rem",
                                }}
                                alt="Sample photo"
                            />
                            <label htmlFor="agendarCita" className="form-label">Agendar Cita</label>
                            <input
                                type="text"
                                className="form-control border-radius-custom"
                                id="agendarCita"
                                name="agendarCita"
                                value={formData.agendarCita}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="fecha" className="form-label">Fecha</label>
                        <input
                            type="date"
                            className="form-control border-radius-custom"
                            id="fecha"
                            name="fecha"
                            value={formData.fecha}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="hora" className="form-label">Hora</label>
                        <input
                            type="time"
                            className="form-control border-radius-custom"
                            id="hora"
                            name="hora"
                            value={formData.hora}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="tipoCita" className="form-label">Tipo de Cita</label>
                        <select
                            className="form-select border-radius-custom"
                            id="tipoCita"
                            name="tipoCita"
                            value={formData.tipoCita}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Seleccione tipo de cita</option>
                            <option value="consulta">Consulta</option>
                            <option value="seguimiento">Seguimiento</option>
                            <option value="emergencia">Emergencia</option>
                        </select>
                    </div>

                    <button type="submit" className="btn btn-primary btn-lg w-100">Agendar Cita</button>
                </form>
            </div>
        </div>
    );
};

export default AgendarCita;
