import PageContainer from "@/components/PageContainer";
import { privacyData } from "@/data/appData";

const PrivacyPage = () => {
	return (
		<PageContainer>
			<div className="py-4 px-4">
				{/* Título */}
				<div className="flex flex-col items-center justify-center leading-tight mb-6">
					<h2 className="text-3xl font-bold mb-2 text-center text-cyan-600">
						Política de Privacidad
					</h2>
					<p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
						Nos tomamos muy en serio la protección de tu información personal y
						médica. Este documento describe cómo recopilamos, utilizamos y
						protegemos tus datos.
					</p>
				</div>

				{/* Lista */}
				<div className="border border-gray-200 rounded-xl shadow-sm p-6 max-w-3xl mx-auto">
					<ul className="flex flex-col gap-6">
						{privacyData.map((data) => (
							<li key={data.id}>
								<h3 className="text-xl font-semibold text-cyan-600 mb-1">
									{data.title}
								</h3>
								<p className="text-gray-600">{data.data}</p>
							</li>
						))}
					</ul>
				</div>
			</div>
		</PageContainer>
	);
};

export default PrivacyPage;
