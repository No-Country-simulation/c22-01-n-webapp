interface PrivacyItemProps {
	title: string;
	data: string[];
}

const PrivacyItem = ({ title, data }: PrivacyItemProps) => {
	return (
		<li className="flex items-start gap-4 text-gray-700">
			<div>
				<h3 className="text-lg font-semibold text-cyan-600 mb-1">{title}</h3>
				<p className="text-gray-600">{data}</p>
			</div>
		</li>
	);
};

export default PrivacyItem;
