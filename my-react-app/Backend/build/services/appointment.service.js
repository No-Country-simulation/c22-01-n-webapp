"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppointmentService = void 0;
const database_config_1 = require("@config/database.config");
const appointments_model_1 = require("@models/appointments.model");
const typeorm_1 = require("typeorm");
class AppointmentService {
    constructor() {
        this.getAllAppointments = async () => {
            const appointmentsRepository = database_config_1.AppDataSource.getRepository(appointments_model_1.Appointment);
            const appointments = await appointmentsRepository.find();
            return appointments;
        };
        this.getAppointmentById = async (appointmentId) => {
            const appointmentsRepository = database_config_1.AppDataSource.getRepository(appointments_model_1.Appointment);
            const appointment = await appointmentsRepository.findOneBy({
                appointmentId,
            });
            return appointment;
        };
        this.createAppointment = async (doctorId, patientId, appointmentDate, startTime, endTime) => {
            const hasConflict = await this.checkAppointmentConflict(doctorId, appointmentDate, startTime, endTime);
            if (hasConflict) {
                throw new Error("APPOINTMENT_CONFLICT");
            }
            const appointmentRepository = database_config_1.AppDataSource.getRepository(appointments_model_1.Appointment);
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
        this.checkAppointmentConflict = async (doctorId, appointmentDate, startTime, endTime) => {
            const appointmentRepository = database_config_1.AppDataSource.getRepository(appointments_model_1.Appointment);
            const conflict = await appointmentRepository.findOne({
                where: {
                    doctor: { doctorId },
                    appointmentDate,
                    starTime: (0, typeorm_1.LessThanOrEqual)(endTime),
                    endTime: (0, typeorm_1.MoreThanOrEqual)(startTime),
                },
            });
            return !!conflict;
        };
    }
}
exports.AppointmentService = AppointmentService;
//# sourceMappingURL=appointment.service.js.map