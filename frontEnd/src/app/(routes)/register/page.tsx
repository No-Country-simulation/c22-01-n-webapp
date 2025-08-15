"use client";
import PageContainer from "@/components/PageContainer";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

const RegisterPage = () => {
	const router = useRouter();

	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		address: "",
		state: "",
		dni: "",
		email: "",
		phone: "",
		age: "",
		profileImage: null,
		role: "paciente", // Valor por defecto
		password: "",
		confirmPassword: "",
	});

	const [error, setError] = useState("");
	const [success, setSuccess] = useState(false);

	const handleChange = (e: any) => {
		const { name, value, type, files } = e.target;
		if (type === "file") {
			setFormData((prev) => ({ ...prev, profileImage: files[0] }));
		} else {
			setFormData((prev) => ({ ...prev, [name]: value }));
		}
	};

	const handleSubmit = async (e: any) => {
		e.preventDefault();

		// Validación de contraseñas
		if (formData.password !== formData.confirmPassword) {
			setError("Las contraseñas no coinciden.");
			setSuccess(false);
			return;
		}

		setSuccess(true);
		setError("");

		try {
			// Convertir FormData a objeto JavaScript
			const userData = {
				user: {
					name: formData.firstName,
					lastname: formData.lastName,
					age: parseInt(formData.age), // Asegurarse de que la edad sea un número
					email: formData.email,
					password: formData.password,
					dni: formData.dni,
					picture: formData.profileImage, // Suponiendo que profileImage es una URL
					phone: formData.phone,
					role:
						formData.role === "paciente" ? 3 : 2 /* otro valor para otro rol */,
				},
			};
			console.log(userData);
			// Realizar la solicitud POST al backend con JSON
			const response = await axios.post(
				"http://localhost:4000/user/register",
				userData,
				{
					headers: {
						"Content-Type": "application/json", // Importante para JSON
					},
				}
			);
			console.log(response);
			// Si la respuesta es exitosa
			if (response.status === 201) {
				setSuccess(true);
				setError("");
				alert("Usuario registrado con éxito.");
				router.push("/login"); // Redirigir a la página de login
			}
		} catch (err: any) {
			setSuccess(false);
			if (err.response?.data) {
				setError(err.response.data.message || "Hubo un error en el registro.");
			} else {
				setError(
					"Hubo un error al registrar el usuario. Por favor, intente nuevamente."
				);
			}
			console.error("Error en el registro:", err);
		}
	};

	return (
		<PageContainer>
			<div className="flex justify-center items-center mt-2 lg:mt-5 mb-1">
				<div className="border-4 border-gray-100 rounded-2xl p-6 shadow-md w-full max-w-md">
					{/* Imagen */}
					<div className="rounded-lg overflow-hidden mb-6">
						<img
							src="https://www.noticias-medicas.com/wp-content/uploads/2018/09/avances-medicos-tecnologicos.jpg"
							alt="Avances médicos tecnológicos"
							className="w-full h-40 object-cover"
						/>
					</div>

					{/* Título */}
					<h3 className="text-center mb-6 text-2xl font-bold text-gray-800 capitalize">
						Regístrate
					</h3>

					<form className="space-y-5" onSubmit={handleSubmit}>
						{/* Nombre y Apellidos */}
						<div className="flex flex-col lg:flex-row gap-4">
							<div className="flex-1">
								<label
									htmlFor="formFirstName"
									className="block text-sm font-medium text-gray-700"
								>
									Nombre
								</label>
								<input
									type="text"
									id="formFirstName"
									name="firstName"
									value={formData.firstName}
									onChange={handleChange}
									className="mt-1 w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#79c3ff]"
								/>
							</div>
							<div className="flex-1">
								<label
									htmlFor="formLastName"
									className="block text-sm font-medium text-gray-700"
								>
									Apellidos
								</label>
								<input
									type="text"
									id="formLastName"
									name="lastName"
									value={formData.lastName}
									onChange={handleChange}
									className="mt-1 w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#79c3ff]"
								/>
							</div>
						</div>

						{/* DNI y Teléfono */}
						<div className="flex flex-col lg:flex-row gap-4">
							<div className="flex-1">
								<label
									htmlFor="formDni"
									className="block text-sm font-medium text-gray-700"
								>
									DNI
								</label>
								<input
									type="text"
									id="formDni"
									name="dni"
									value={formData.dni}
									onChange={handleChange}
									className="mt-1 w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#79c3ff]"
								/>
							</div>
							<div className="flex-1">
								<label
									htmlFor="formPhone"
									className="block text-sm font-medium text-gray-700"
								>
									Teléfono
								</label>
								<input
									type="text"
									id="formPhone"
									name="phone"
									value={formData.phone}
									onChange={handleChange}
									className="mt-1 w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#79c3ff]"
								/>
							</div>
						</div>

						{/* Email */}
						<div>
							<label
								htmlFor="formEmail"
								className="block text-sm font-medium text-gray-700"
							>
								Email
							</label>
							<input
								type="email"
								id="formEmail"
								name="email"
								value={formData.email}
								onChange={handleChange}
								className="mt-1 w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#79c3ff]"
							/>
						</div>

						{/* Dirección y Estado */}
						<div className="flex flex-col lg:flex-row gap-4">
							<div className="flex-2">
								<label
									htmlFor="formAddress"
									className="block text-sm font-medium text-gray-700"
								>
									Dirección
								</label>
								<input
									type="text"
									id="formAddress"
									name="address"
									value={formData.address}
									onChange={handleChange}
									className="mt-1 w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#79c3ff]"
								/>
							</div>
							<div className="flex-1">
								<label
									htmlFor="formState"
									className="block text-sm font-medium text-gray-700"
								>
									Estado (Argentina)
								</label>
								<select
									id="formState"
									name="state"
									value={formData.state}
									onChange={handleChange}
									className="mt-1 w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#79c3ff]"
								>
									<option value="">Seleccionar</option>
									<option value="Buenos Aires">Buenos Aires</option>
								</select>
							</div>
						</div>

						{/* Foto de perfil */}
						<div>
							<label
								htmlFor="formProfileImage"
								className="block text-sm font-medium text-gray-700"
							>
								Subir foto de perfil
							</label>
							<input
								type="file"
								id="formProfileImage"
								name="profileImage"
								onChange={handleChange}
								className="mt-1 w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#79c3ff]"
							/>
						</div>

						{/* Contraseña y Confirmar contraseña */}
						<div className="flex flex-col lg:flex-row gap-4">
							<div className="flex-1">
								<label
									htmlFor="formPassword"
									className="block text-sm font-medium text-gray-700"
								>
									Contraseña
								</label>
								<input
									type="password"
									id="formPassword"
									name="password"
									value={formData.password}
									onChange={handleChange}
									className="mt-1 w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#79c3ff]"
								/>
							</div>
							<div className="flex-1">
								<label
									htmlFor="formConfirmPassword"
									className="block text-sm font-medium text-gray-700"
								>
									Confirmar contraseña
								</label>
								<input
									type="password"
									id="formConfirmPassword"
									name="confirmPassword"
									value={formData.confirmPassword}
									onChange={handleChange}
									className="mt-1 w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#79c3ff]"
								/>
							</div>
						</div>

						{/* Botones */}
						<div className="flex justify-center gap-4 lg:gap-8 mt-6">
							<button
								type="submit"
								className="bg-[#57a05b] lg:bg-[#66bb6a] hover:bg-[#57a05b] text-white font-bold py-2 px-4 rounded-lg transition duration-300 w-full sm:w-auto mt-3"
							>
								Registrarse
							</button>
							<button
								type="button"
								onClick={() => window.history.back()}
								className="bg-[#e57373] lg:bg-[#ef9a9a] hover:bg-[#e57373] text-white font-bold py-2 px-4 rounded-lg transition duration-300 w-full sm:w-auto mt-3"
							>
								Regresar
							</button>
						</div>

						{/* Mensajes */}
						{error && <div className="text-red-500 mt-2">{error}</div>}
						{success && (
							<div className="text-green-500 mt-2">Registro exitoso</div>
						)}
					</form>
				</div>
			</div>
		</PageContainer>
	);
};

export default RegisterPage;
