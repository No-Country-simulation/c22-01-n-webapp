import FaqList from "@/components/faq/FaqList";
import FaqTitle from "@/components/faq/FaqTitle";
import PageContainer from "@/components/common/PageContainer";

const FaqPage = () => {
	return (
		<PageContainer>
			<div className="py-4 px-4">
				<FaqTitle />
				<FaqList />
			</div>
		</PageContainer>
	);
};

export default FaqPage;
