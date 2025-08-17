import Carousel from "@/components/common/Carousel";
import DoctorsCard from "@/components/common/DoctorsCard";
import HeroSection from "@/components/common/HeroSection";
import Introduction from "@/components/common/Introduction";
import PageContainer from "@/components/common/PageContainer";

export default function Home() {
	return (
		<PageContainer>
			<Introduction />
			<DoctorsCard className="flex flex-row justify-start gap-3 max-w-[90%] mx-auto m-8" />
			<Carousel />
			<HeroSection className="relative w-full max-w-[90%] mx-auto m-8" />
		</PageContainer>
	);
}
