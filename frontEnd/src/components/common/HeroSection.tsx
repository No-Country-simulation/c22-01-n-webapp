interface HeroSectionProps {
	className: string;
}

const HeroSection = (props: HeroSectionProps) => {
	const { className } = props;

	return (
		<div className={className}>
			<div
				className="relative w-full h-[40vh] bg-cover bg-center bg-no-repeat flex items-center justify-center border rounded-md"
				style={{
					backgroundImage:
						'url("https://i.pinimg.com/736x/6e/37/5a/6e375ad883c69fbb6f5845e99ca25623.jpg")',
				}}
			>
				{/* Overlay */}
				<div className="absolute inset-0 bg-black/40"></div>

				{/* Content */}
				<div className="relative text-center text-white px-4">
					<h1 className="text-3xl md:text-4xl font-bold mb-2">
						Siempre a tu lado, las 24 horas
					</h1>
					<p className="text-lg md:text-xl max-w-2xl mx-auto">
						Accede a profesionales de la salud en cualquier momento del día,
						desde cualquier lugar. Tu bienestar siempre es nuestra prioridad.
					</p>
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
