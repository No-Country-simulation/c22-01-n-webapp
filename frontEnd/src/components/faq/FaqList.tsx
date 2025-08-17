import { faqData } from "@/data/appData";
import FaqItem from "./FaqItem";

const FaqList = () => {
	return (
		<div className="border border-gray-200 rounded-xl shadow-sm p-6 max-w-3xl mx-auto">
			<ul className="flex flex-col gap-6">
				{faqData.map((data) => (
					<FaqItem
						key={data.id}
						question={data.question}
						answer={data.answer}
					/>
				))}
			</ul>
		</div>
	);
};

export default FaqList;
