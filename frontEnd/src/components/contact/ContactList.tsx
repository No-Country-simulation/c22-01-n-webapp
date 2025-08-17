import { contactData } from "@/data/appData";
import ContactItem from "./ContactItem";

const ContactList = () => {
	return (
		<div className="border-4 border-gray-100 rounded-xl shadow-md p-6 max-w-2xl mx-auto">
			<ul className="flex flex-col gap-5">
				{contactData.map((data) => (
					<ContactItem
						key={data.id}
						icon={data.icon}
						fieldName={data.fieldName}
						fieldValue={data.fieldValue}
					/>
				))}
			</ul>
		</div>
	);
};

export default ContactList;
