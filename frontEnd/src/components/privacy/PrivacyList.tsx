import { privacyData } from "@/data/appData";
import PrivacyItem from "./PrivacyItem";

const PrivacyList = () => {
	return (
		<div className="border-4 border-gray-100 rounded-xl shadow-md p-6 max-w-2xl mx-auto">
			<ul className="flex flex-col gap-5">
				{privacyData.map((data) => (
					<PrivacyItem key={data.id} title={data.title} data={data.data} />
				))}
			</ul>
		</div>
	);
};

export default PrivacyList;
