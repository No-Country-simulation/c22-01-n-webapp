import PageContainer from "@/components/PageContainer";
import { contactData } from "@/data/appData";

const ContactPage = () => {
	return (
		<PageContainer>
			<div className="py-4 px-4">
				{/* Título */}
				<div className="flex flex-col items-center justify-center leading-tight mb-6">
					<h2 className="text-3xl font-bold mb-2 text-center text-[#03a9f4]">
						Contacto
					</h2>
					<p className="text-lg text-gray-600 text-center max-w-3xl">
						Si tienes dudas, necesitas asistencia técnica o quieres enviarnos
						sugerencias, puedes comunicarte con nosotros a través de los
						siguientes medios:
					</p>
				</div>

				{/* Lista de contacto */}
				<div className="border-4 border-gray-100 rounded-xl shadow-md p-6 max-w-2xl mx-auto">
					<ul className="flex flex-col gap-5">
						{contactData.map((data) => (
							<li
								key={data.id}
								className="flex items-start gap-4 text-gray-700"
							>
								{/* Icono */}
								<data.icon className="w-8 h-8 text-[#74c7bf] flex-shrink-0" />

								{/* Información */}
								<div>
									<h3 className="text-lg font-semibold text-[#03a9f4] mb-1">
										{data.fieldName}
									</h3>
									<p className="text-gray-600">{data.fieldValue}</p>
								</div>
							</li>
						))}
					</ul>
				</div>

				{/* Mensaje final */}
				<p className="text-lg text-gray-600 mt-6 text-center max-w-3xl mx-auto">
					Nuestro equipo de soporte está disponible para ayudarte con cualquier
					incidencia técnica, resolver problemas con el registro, el acceso a tu
					cuenta o la programación de citas.
				</p>
			</div>
		</PageContainer>
	);
};

export default ContactPage;
