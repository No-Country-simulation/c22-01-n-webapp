interface DoctorsCardProps {
	className: string;
}

const DoctorsCard = (props: DoctorsCardProps) => {
	const { className } = props;

	return (
		<div className={className}>
			<div className="border-1 border-cyan-600 rounded-lg shadow-lg w-48 text-center p-4 leading-tight">
				{/* Photo */}
				<img
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUbz4oJpgUEXE4MI1CoBw3cX6i78rXZ_7Fcw&s"
					alt="Doctor_photo"
					className="h-34 w-full object-cover rounded-md mb-3"
				/>

				{/* Name */}
				<h5 className="text-lg font-semibold text-gray-800 leading-5">
					Dra. Daniela Perez
				</h5>

				{/* Especially */}
				<h6 className="text-sm text-gray-500 mb-2">Medicina General</h6>

				{/* Btn */}
				<button className="bg-gray-500 hover:bg-gray-700 text-white font-medium px-3 py-2 rounded-lg shadow-md transition duration-300">
					Agendar cita
				</button>
			</div>
		</div>
	);
};

export default DoctorsCard;
