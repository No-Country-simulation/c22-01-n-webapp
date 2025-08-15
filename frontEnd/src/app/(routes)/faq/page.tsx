import PageContainer from "@/components/PageContainer";
import { faqData } from "@/data/appData";

const FaqPage = () => {
	return (
		<PageContainer>
			<div className="py-4 px-4">
				{/* Título */}
				<div className="flex flex-col items-center justify-center leading-tight mb-6">
					<h2 className="text-3xl font-bold mb-1 text-center text-[#03a9f4]">
						FAQ
					</h2>
					<span className="text-2xl text-[#03a9f4] leading-5">
						(Preguntas Frecuentes)
					</span>
				</div>

				{/* Lista */}
				<div className="border border-gray-200 rounded-xl shadow-sm p-6 max-w-3xl mx-auto bg-white">
					<ul className="flex flex-col gap-6">
						{faqData.map((data) => (
							<li key={data.id}>
								<h3 className="text-xl font-semibold text-[#03a9f4] mb-1">
									{data.question}
								</h3>
								<p className="text-gray-600">{data.answer}</p>
							</li>
						))}
					</ul>
				</div>
			</div>
		</PageContainer>
	);
};

export default FaqPage;
