"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const error_handler_1 = require("@middlewares/error.handler");
const appointment_service_1 = require("@services/appointment.service");
class AppointmentController {
    constructor() {
        this.appointmentService = new appointment_service_1.AppointmentService();
    }
    async getAllAppointments(_req, res) {
        try {
            const appointments = await this.appointmentService.getAllAppointments();
            res.status(200).json(appointments);
        }
        catch (err) {
            if (err instanceof Error) {
                (0, error_handler_1.handlerError)(res, "ERROR_GET_APPOINTMENTS", 404);
            }
            else {
                (0, error_handler_1.handlerError)(res, "UNKNOWN_ERROR", 500);
            }
        }
    }
    async getAppointmentById(req, res) {
        const { id } = req.params;
        if (!id || isNaN(Number(id))) {
            return (0, error_handler_1.handlerError)(res, "INVALID_ID", 400);
        }
        try {
            const appointment = await this.appointmentService.getAppointmentById(Number(id));
            if (!appointment) {
                (0, error_handler_1.handlerError)(res, "APPOINTMENT_NOT_FOUND", 404);
            }
            else {
                res.status(200).json(appointment);
            }
        }
        catch (err) {
            if (err instanceof Error) {
                (0, error_handler_1.handlerError)(res, "ERROR_GET_APPOINTMENT", 404);
            }
            else {
                (0, error_handler_1.handlerError)(res, "UNKNOWN_ERROR", 500);
            }
        }
    }
    async createAppointment(req, res) {
        const { doctorId, patientId, appointmentDate, startTime, endTime } = req.body;
        if (!doctorId || !patientId || !appointmentDate || !startTime || !endTime) {
            return (0, error_handler_1.handlerError)(res, "INVALID_INPUT", 400);
        }
        try {
            const appointment = await this.appointmentService.createAppointment(Number(doctorId), Number(patientId), new Date(appointmentDate), new Date(startTime), new Date(endTime));
            res.status(201).json(appointment);
        }
        catch (err) {
            if (err instanceof Error && err.message === "APPOINTMENT_CONFLICT") {
                (0, error_handler_1.handlerError)(res, "CONFLICTING_APPOINTMENT", 409);
            }
            else {
                (0, error_handler_1.handlerError)(res, "ERROR_CREATING_APPOINTMENT", 500);
            }
        }
    }
}
exports.default = new AppointmentController();
//# sourceMappingURL=appointments.controller.js.map