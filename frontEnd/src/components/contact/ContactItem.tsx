import { IconType } from "react-icons";

interface ContactItemProps {
	icon: IconType;
	fieldName: string;
	fieldValue: string;
}

const ContactItem = ({
	icon: Icon,
	fieldName,
	fieldValue,
}: ContactItemProps) => {
	return (
		<li className="flex items-start gap-4 text-gray-700">
			<Icon className="w-8 h-8 text-teal-500 flex-shrink-0" />
			<div>
				<h3 className="text-lg font-semibold text-cyan-600 mb-1">
					{fieldName}
				</h3>
				<p className="text-gray-600">{fieldValue}</p>
			</div>
		</li>
	);
};

export default ContactItem;
