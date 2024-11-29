import { AppDataSource } from "@config/database.config";
import { Appointment } from "@models/appointments.model";
import { LessThanOrEqual, MoreThanOrEqual } from "typeorm";

export class AppointmentService {
  getAllAppointments = async (): Promise<Appointment[]> => {
    const appointmentsRepository = AppDataSource.getRepository(Appointment);
    const appointments = await appointmentsRepository.find();
    return appointments;
  };

  getAppointmentById = async (
    appointmentId: number
  ): Promise<Appointment | null> => {
    const appointmentsRepository = AppDataSource.getRepository(Appointment);
    const appointment = await appointmentsRepository.findOneBy({
      appointmentId,
    });
    return appointment;
  };

  createAppointment = async (
    doctorId: number,
    patientId: number,
    appointmentDate: Date,
    startTime: Date,
    endTime: Date
  ): Promise<Appointment> => {
    const hasConflict = await this.checkAppointmentConflict(
      doctorId,
      appointmentDate,
      startTime,
      endTime
    );
    if (hasConflict) {
      throw new Error("APPOINTMENT_CONFLICT");
    }

    const appointmentRepository = AppDataSource.getRepository(Appointment);
    const appointment = appointmentRepository.create({
      doctor: { doctorId },
      patient: { patientId },
      appointmentDate,
      starTime: startTime,
      endTime: endTime,
      registrationDate: new Date(),
      isCancelled: false,
    });
    return await appointmentRepository.save(appointment);
  };

  checkAppointmentConflict = async (
    doctorId: number,
    appointmentDate: Date,
    startTime: Date,
    endTime: Date
  ): Promise<boolean> => {
    const appointmentRepository = AppDataSource.getRepository(Appointment);
    const conflict = await appointmentRepository.findOne({
      where: {
        doctor: { doctorId },
        appointmentDate,
        starTime: LessThanOrEqual(endTime),
        endTime: MoreThanOrEqual(startTime),
      },
    });
    return !!conflict;
  };
}
