import React, { useState } from 'react';



const AgendarCita= () => {
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
        <div className="container mt-5">
            <h2>Formulario para Agendar Cita</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="agendarCita" className="form-label">Agendar cita</label>
                    <input
                        type="text"
                        className="form-control"
                        id="agendarCita"
                        name="agendarCita"
                        value={formData.agendarCita}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="fecha" className="form-label">Fecha</label>
                    <input
                        type="date"
                        className="form-control"
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
                        className="form-control"
                        id="hora"
                        name="hora"
                        value={formData.hora}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="tipoCita" className="form-label">Tipo de cita</label>
                    <select
                        className="form-select"
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

                <button type="submit" className="btn btn-primary">Agendar cita</button>
            </form>
        </div>
    );
};

export default AgendarCita;
