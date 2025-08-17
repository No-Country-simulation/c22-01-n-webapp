import { termsData } from "@/data/appData";
import TermsItem from "./TermsItem";

const TermsList = () => {
	return (
		<div className="border-4 border-gray-100 rounded-xl shadow-md p-6 max-w-2xl mx-auto">
			<ul className="flex flex-col gap-5">
				{termsData.map((data) => (
					<TermsItem key={data.id} title={data.title} data={data.data} />
				))}
			</ul>
		</div>
	);
};

export default TermsList;
