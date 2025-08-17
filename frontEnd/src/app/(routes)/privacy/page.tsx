import PageContainer from "@/components/common/PageContainer";
import PrivacyList from "@/components/privacy/PrivacyList";
import PrivacyTitle from "@/components/privacy/PrivacyTitle";

const PrivacyPage = () => {
	return (
		<PageContainer>
			<div className="py-4 px-4">
				<PrivacyTitle />
				<PrivacyList />
			</div>
		</PageContainer>
	);
};

export default PrivacyPage;
