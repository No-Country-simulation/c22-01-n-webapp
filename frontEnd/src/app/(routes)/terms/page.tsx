import PageContainer from "@/components/PageContainer";
import { termsData } from "@/data/appData";

const TermsPage = () => {
	return (
		<PageContainer>
			<div className="py-4 px-4">
				{/* Título */}
				<div className="flex flex-col items-center justify-center leading-tight mb-6">
					<h2 className="text-3xl font-bold mb-2 text-center text-cyan-600">
						Términos de Servicio
					</h2>
					<p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
						Al acceder y utilizar nuestra plataforma, aceptas los siguientes
						términos.
					</p>
				</div>

				{/* Lista de términos */}
				<div className="border border-gray-200 rounded-xl shadow-sm p-6 max-w-3xl mx-auto">
					<ul className="flex flex-col gap-6">
						{termsData.map((data) => (
							<li key={data.id}>
								<h3 className="text-xl font-semibold text-cyan-600 mb-1">
									{data.title}
								</h3>
								<ul className="list-disc list-inside text-gray-600 space-y-1 pl-5">
									{data.data.map((item) => (
										<li key={item}>{item}</li>
									))}
								</ul>
							</li>
						))}
					</ul>
				</div>
			</div>
		</PageContainer>
	);
};

export default TermsPage;
