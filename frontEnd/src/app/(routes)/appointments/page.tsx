"use client";
import PageContainer from "@/components/common/PageContainer";
import { useState } from "react";

const AppointmentPage = () => {
	const [formData, setFormData] = useState({
		agendarCita: "",
		fecha: "",
		hora: "",
		tipoCita: "",
	});

	const handleChange = (e: any) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();
		console.log("Datos enviados:", formData);
	};
	return (
		<PageContainer>
			<div className="flex justify-center items-center mt-2 lg:mt-5 mb-1">
				<div className="border-4 border-gray-100 rounded-2xl p-5 shadow-md w-full max-w-md">
					{/* Image */}
					<div className="rounded-lg overflow-hidden mb-6">
						<img
							src="https://www.noticias-medicas.com/wp-content/uploads/2018/09/avances-medicos-tecnologicos.jpg"
							alt="Avances médicos tecnológicos"
							className="w-full h-40 object-cover"
						/>
					</div>
					<h2 className="text-center mb-6 text-2xl font-bold text-gray-800 capitalize">
						Agende su Cita
					</h2>

					<form onSubmit={handleSubmit} className="space-y-5">
						{/* Fecha y Hora */}
						<div className="flex flex-col lg:flex-row gap-4">
							<div className="flex-1">
								<label
									htmlFor="fecha"
									className="block text-sm font-medium text-gray-700"
								>
									Fecha
								</label>
								<input
									type="date"
									id="fecha"
									name="fecha"
									value={formData.fecha}
									onChange={handleChange}
									required
									className="mt-1 w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
								/>
							</div>
							<div className="flex-1">
								<label
									htmlFor="fecha"
									className="block text-sm font-medium text-gray-700"
								>
									Hora
								</label>
								<input
									type="time"
									id="hora"
									name="hora"
									value={formData.hora}
									onChange={handleChange}
									required
									className="mt-1 w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
								/>
							</div>
						</div>

						{/* Type */}
						<div className="block space-y-2">
							<label
								htmlFor="tipoCita"
								className="block text-sm font-medium text-gray-700"
							>
								Tipo de Cita
							</label>
							<select
								id="tipoCita"
								name="tipoCita"
								value={formData.tipoCita}
								onChange={handleChange}
								required
								className="mt-1 w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
							>
								<option value="">Seleccione tipo de cita</option>
								<option value="consulta">Consulta</option>
								<option value="seguimiento">Seguimiento</option>
								<option value="emergencia">Emergencia</option>
							</select>
						</div>

						{/* Buttons */}
						<div className="flex justify-center gap-4 lg:gap-8 mt-6">
							<button
								type="submit"
								className="bg-green-600 lg:bg-green-500 hover:bg-green-700  text-white font-bold py-2 px-4 rounded-lg transition duration-300 w-full sm:w-auto mt-3"
							>
								Agendar
							</button>
							<button
								type="button"
								onClick={() => window.history.back()}
								className="bg-red-400 lg:bg-red-300 hover:bg-red-500  text-white font-bold py-2 px-4 rounded-lg transition duration-300 w-full sm:w-auto mt-3"
							>
								Regresar
							</button>
						</div>
					</form>
				</div>
			</div>
		</PageContainer>
	);
};

export default AppointmentPage;
