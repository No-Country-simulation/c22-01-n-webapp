import AboutText from "@/components/about/AboutText";
import AboutTitle from "@/components/about/AboutTitle";
import PageContainer from "@/components/common/PageContainer";

const AboutPage = () => {
	return (
		<PageContainer>
			<div className="py-4 px-4">
				<AboutTitle />
				<AboutText />
			</div>
		</PageContainer>
	);
};

export default AboutPage;
