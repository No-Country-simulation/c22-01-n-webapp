import Carousel from "@/components/Carousel";
import DoctorsCard from "@/components/DoctorsCard";
import Introduction from "@/components/Introduction";
import PageContainer from "@/components/PageContainer";

export default function Home() {
	return (
		<PageContainer>
			<Introduction />
			<DoctorsCard />
			<Carousel />
		</PageContainer>
	);
}
