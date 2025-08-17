"use client";
import PageContainer from "@/components/common/PageContainer";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";

const LoginPage = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		try {
			const response = await axios.post("http://localhost:4000/user/login", {
				email,
				password,
			});

			if (response.status === 200) {
				console.log("Inicio de sesión exitoso!");
			} else {
				console.error("Error al iniciar sesión");
			}
		} catch (error) {
			console.error("Error:", error);
		}
	};
	return (
		<PageContainer>
			<div className="flex justify-center items-center mt-2 lg:mt-5 mb-1">
				<div className="border-4 border-gray-100 rounded-2xl p-6 shadow-md w-full max-w-md">
					{/* Image */}
					<div className="rounded-lg overflow-hidden mb-6">
						<img
							src="https://www.noticias-medicas.com/wp-content/uploads/2018/09/avances-medicos-tecnologicos.jpg"
							alt="Avances médicos tecnológicos"
							className="w-full h-40 object-cover"
						/>
					</div>

					{/* Title */}
					<h3 className="text-center mb-6 text-2xl font-bold text-gray-800 capitalize">
						Iniciar sesión
					</h3>

					{/* Form */}
					<form onSubmit={handleSubmit} className="space-y-4 w-[85%] mx-auto">
						{/* Email */}
						<div>
							<label
								htmlFor="email"
								className="block text-sm font-medium text-gray-700"
							>
								Correo electrónico
							</label>
							<input
								type="email"
								id="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								required
								className="mt-1 w-full border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
							/>
						</div>

						{/* Password */}
						<div>
							<label
								htmlFor="password"
								className="block text-sm font-medium text-gray-700"
							>
								Contraseña
							</label>
							<input
								type="password"
								id="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								required
								className="mt-1 w-full border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
							/>
						</div>

						{/* Buttons */}
						<div className="flex justify-center gap-4 lg:gap-8 mt-6">
							<button
								type="submit"
								className="bg-green-600 lg:bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 w-full sm:w-auto mt-3"
							>
								Ingresar
							</button>
							<Link href="/">
								<button
									type="button"
									className="bg-red-400 lg:bg-red-300 hover:bg-red-500 text-white font-bold py-2 px-4 rounded-lg transition duration-300 w-full sm:w-auto mt-3"
								>
									Cancelar
								</button>
							</Link>
						</div>
					</form>
				</div>
			</div>
		</PageContainer>
	);
};

export default LoginPage;
