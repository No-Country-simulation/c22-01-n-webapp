const Carousel = () => {
	return (
		<div
			id="carouselExampleFade"
			className="carousel slide carousel-fade"
			data-bs-ride="carousel"
		>
			<div className="carousel-inner">
				{/* Primer item activo */}
				<div className="carousel-item active">
					<img
						src="https://img.freepik.com/fotos-premium/grupo-medicos-modernos-exitosos-seguros-estan-posando-mirando-camara-pasillo-hospital_283617-1203.jpg?semt=ais_hybrid"
						className="d-block w-100"
						alt="..."
						style={{
							objectFit: "cover",
							height: "300px",
						}}
					/>
				</div>

				{/* Segundo item */}
				<div className="carousel-item">
					<img
						src="https://www.shutterstock.com/shutterstock/videos/3432671919/thumb/1.jpg?ip=x480"
						className="d-block w-100"
						alt="..."
						style={{
							objectFit: "cover",
							height: "300px",
						}}
					/>
				</div>

				{/* Tercer item */}
				<div className="carousel-item">
					<img
						src="https://img.freepik.com/foto-gratis/cientificos-tiro-medio-posando-juntos_23-2148969982.jpg"
						className="d-block w-100"
						alt="..."
						style={{
							objectFit: "cover",
							height: "300px",
						}}
					/>
				</div>
			</div>

			{/* Botón anterior */}
			<button
				className="carousel-control-prev"
				type="button"
				data-bs-target="#carouselExampleFade"
				data-bs-slide="prev"
			>
				<span className="carousel-control-prev-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Previous</span>
			</button>

			{/* Botón siguiente */}
			<button
				className="carousel-control-next"
				type="button"
				data-bs-target="#carouselExampleFade"
				data-bs-slide="next"
			>
				<span className="carousel-control-next-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Next</span>
			</button>
		</div>
	);
};

export default Carousel;
