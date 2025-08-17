import PageContainer from "@/components/common/PageContainer";
import TermsList from "@/components/terms/TermsList";
import TermsTitle from "@/components/terms/TermsTitle";

const TermsPage = () => {
	return (
		<PageContainer>
			<div className="py-4 px-4">
				<TermsTitle />
				<TermsList />
			</div>
		</PageContainer>
	);
};

export default TermsPage;
