import { AppDataSource } from "@config/database.config";
import { AppointmentResponseDto } from "@dtos/appointmentResponseDto";
import { Appointment } from "@models/appointments.model";
import { User } from "@models/users.model";
import { checkAvailable } from "@utils/checkAvailable";

export class AppointmentService {
  private readonly repository = AppDataSource.getRepository(Appointment);

  // Obtener citas
  getAllAppointment = async (): Promise<AppointmentResponseDto[]> => {
    const appointments = await this.repository.find({ relations: ["user"] });
    return appointments.map((appointment) => ({
      pk_appointment: appointment.pk_appointment,
      registration_date: appointment.registrationDate,
      appointment_date: appointment.appointmentDate,
      hour_appointment: appointment.hourAppointment,
      is_cancelled: appointment.isCancelled,
      fk_user: appointment.user
        ? {
            name: appointment.user.name,
            lastname: appointment.user.lastname,
            age: appointment.user.age,
            dni: appointment.user.dni,
            picture: appointment.user.picture,
          }
        : undefined, // Si no hay usuario, retorna undefined
    }));
  };

  // Obtener cita por ID
  getAppointmentById = async (
    id: number
  ): Promise<AppointmentResponseDto | null> => {
    const appointment = await this.repository.findOne({
      where: { pk_appointment: id },
      relations: ["user"],
    });
    if (!appointment) {
      return null; // Devuelve null si no se encuentra
    }
    return {
      pk_appointment: appointment.pk_appointment,
      registration_date: appointment.registrationDate,
      appointment_date: appointment.appointmentDate,
      hour_appointment: appointment.hourAppointment,
      is_cancelled: appointment.isCancelled,
      fk_user: appointment.user
        ? {
            name: appointment.user.name,
            lastname: appointment.user.lastname,
            age: appointment.user.age,
            dni: appointment.user.dni,
            picture: appointment.user.picture,
          }
        : undefined, // Si no hay usuario, retorna undefined
    };
  };

  // Crear citas
  createAppointment = async (data: Appointment): Promise<Appointment> => {
    try {
      const isAvailable = await checkAvailable(data);
      if (!isAvailable) {
        throw new Error("APPOINTMENT_CONFLICT");
      }

      const newAppointment = this.repository.create({
        user: { pk_user: data.user.pk_user },
        appointmentDate: data.appointmentDate,
        hourAppointment: data.hourAppointment,
        isCancelled: false,
      });

      return await this.repository.save(newAppointment);
    } catch (error) {
      throw new Error("Error al Crear Citas");
    }
  };
}
