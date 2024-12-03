import { AppDataSource } from "@config/database.config";
import { Appointment } from "@models/appointments.model";
import { Between } from "typeorm";

export const checkAvailable = async (data: Appointment): Promise<boolean> => {
  const appointmentRepository = AppDataSource.getRepository(Appointment);

  const time = new Date(`${data.appointmentDate}T${data.hourAppointment}`);
  const hourBefore = new Date(time.getTime() - 60 * 60 * 1000);
  const hourAfter = new Date(time.getTime() + 60 * 60 * 1000);

  const conflict = await appointmentRepository.count({
    where: {
      user: { pk_user: data.user.pk_user },
      appointmentDate: data.appointmentDate,
      hourAppointment: Between(
        hourBefore.toTimeString().slice(0, 8),
        hourAfter.toTimeString().slice(0, 8)
      ),
    },
  });

  return conflict === 0; // Retorna true si no hay conflictos
};
