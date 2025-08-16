import Carousel from "@/components/Carousel";
import DoctorsCard from "@/components/DoctorsCard";
import HeroSection from "@/components/HeroSection";
import Introduction from "@/components/Introduction";
import PageContainer from "@/components/PageContainer";

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
