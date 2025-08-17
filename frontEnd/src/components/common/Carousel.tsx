"use client";

import { useState } from "react";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";

const images = [
	"https://img.freepik.com/fotos-premium/grupo-medicos-modernos-exitosos-seguros-estan-posando-mirando-camara-pasillo-hospital_283617-1203.jpg?semt=ais_hybrid",
	"https://www.shutterstock.com/shutterstock/videos/3432671919/thumb/1.jpg?ip=x480",
	"https://img.freepik.com/foto-gratis/cientificos-tiro-medio-posando-juntos_23-2148969982.jpg",
];

const Carousel = () => {
	const [current, setCurrent] = useState(0);

	const prevSlide = () => {
		setCurrent(current === 0 ? images.length - 1 : current - 1);
	};

	const nextSlide = () => {
		setCurrent(current === images.length - 1 ? 0 : current + 1);
	};

	return (
		<div className="relative w-full max-w-[90%] mx-auto">
			{/* Image */}
			<div className="overflow-hidden rounded-md shadow-lg">
				<img
					src={images[current]}
					alt={`slide-${current}`}
					className="w-full h-[350px] object-cover transition-all duration-700"
				/>
			</div>

			{/* Back Btn */}
			<button
				onClick={prevSlide}
				className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/30 p-2 rounded-full text-white hover:bg-black/50 transition"
			>
				<HiChevronDoubleLeft className="w-6 h-6" />
			</button>

			{/* Next Btn */}
			<button
				onClick={nextSlide}
				className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/30 p-2 rounded-full text-white hover:bg-black/50 transition"
			>
				<HiChevronDoubleRight className="w-6 h-6" />
			</button>

			{/* Point */}
			<div className="flex justify-center gap-2 mt-5">
				{images.map((imageUrl, index) => (
					<button
						key={imageUrl}
						onClick={() => setCurrent(index)}
						className={`w-3 h-3 rounded-full transition ${
							current === index ? "bg-cyan-600" : "bg-gray-300"
						}`}
					></button>
				))}
			</div>
		</div>
	);
};

export default Carousel;
