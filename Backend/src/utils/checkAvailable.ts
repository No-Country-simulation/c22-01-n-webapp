import { AppDataSource } from "@config/database.config";
import { Appointment } from "@models/appointments.model";
import { Between } from "typeorm";
import { toZonedTime } from "date-fns-tz";

export const checkAvailable = async (data: Appointment): Promise<boolean> => {
	const appointmentRepository = AppDataSource.getRepository(Appointment);

	// Zona horaria Colombia
	const timeZone = "America/Bogota";

	// Convertir la fecha y hora de la cita a la zona horaria Colombia
	const baseDateTime = new Date(
		`${data.appointment_date}T${data.appointment_time}`
	);
	const zonedDateTime = toZonedTime(baseDateTime, timeZone);

	// Duración de la cita (30 min) + tiempo de buffer (10 min)
	const appointmentDuration = 30;
	const bufferTime = 10;

	const startTime = new Date(zonedDateTime.getTime() - bufferTime * 60 * 1000);
	const endTime = new Date(
		zonedDateTime.getTime() +
			appointmentDuration * 60 * 1000 +
			bufferTime * 60 * 1000
	);

	// Buscar conflictos en ese rango
	const conflict = await appointmentRepository.count({
		where: {
			doctor: data.doctor,
			appointment_date: data.appointment_date,
			appointment_time: Between(
				startTime.toTimeString().slice(0, 8),
				endTime.toTimeString().slice(0, 8)
			),
		},
	});

	return conflict === 0; // true = disponible
};
