import ContactList from "@/components/contact/ContactList";
import ContactText from "@/components/contact/ContactText";
import ContactTitle from "@/components/contact/ContactTitle";
import PageContainer from "@/components/common/PageContainer";

const ContactPage = () => {
	return (
		<PageContainer>
			<div className="py-4 px-4">
				<ContactTitle />
				<ContactList />
				<ContactText />
			</div>
		</PageContainer>
	);
};

export default ContactPage;
