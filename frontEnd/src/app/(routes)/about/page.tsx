import PageContainer from "@/components/PageContainer";

const AboutPage = () => {
	return (
		<PageContainer>
			<div className="py-4 px-4">
				{/* Title */}
				<div className="flex flex-col items-center justify-center leading-tight mb-6">
					<h2 className="text-3xl font-bold mb-2 text-center text-cyan-600">
						Acerca de MediConnect
					</h2>
				</div>

				{/* Text */}
				<div className="border-4 border-gray-100 rounded-xl shadow-md p-6 max-w-4xl mx-auto">
					<p className="text-lg text-gray-600 leading-relaxed text-justify">
						Somos una plataforma de salud digital creada para conectar a
						pacientes y profesionales médicos de manera rápida, segura y
						eficiente. Nuestra misión es facilitar el acceso a la atención
						médica mediante herramientas tecnológicas modernas que simplifican
						la gestión de citas, el seguimiento de tratamientos y la
						comunicación entre médicos y pacientes.
						<br />
						<br />
						En nuestra web app, los usuarios pueden registrarse como pacientes o
						profesionales de la salud, crear y administrar perfiles, agendar
						consultas presenciales o virtuales, y almacenar información clínica
						relevante.
						<br />
						<br />
						Trabajamos con un equipo comprometido en ofrecer una experiencia
						confiable, intuitiva y adaptada a las necesidades del sector salud.
						Cumplimos con las normativas de protección de datos vigentes y
						aplicamos medidas de seguridad para garantizar que la información
						médica y personal esté siempre protegida.
						<br />
						<br />
						Creemos que la tecnología debe estar al servicio de las personas,
						por eso ponemos a tu alcance una plataforma que te acompaña en todo
						momento, con disponibilidad 24/7.
					</p>
				</div>
			</div>
		</PageContainer>
	);
};

export default AboutPage;
