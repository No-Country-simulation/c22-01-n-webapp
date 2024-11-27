import { handlerError } from "@middlewares/error.handler";
import { AppointmentService } from "@services/appointment.service";
import { Request, Response } from "express";

class AppointmentController {
  private readonly appointmentService: AppointmentService;
  constructor() {
    this.appointmentService = new AppointmentService();
  }

  async getAllAppointments(_req: Request, res: Response) {
    try {
      const appointments = await this.appointmentService.getAllAppointments();
      res.status(200).json(appointments);
    } catch (err) {
      if (err instanceof Error) {
        handlerError(res, "ERROR_GET_APPOINTMENTS", 404);
      } else {
        handlerError(res, "UNKNOWN_ERROR", 500);
      }
    }
  }

  async getAppointmentById(req: Request, res: Response) {
    const { id } = req.params;
    if (!id || isNaN(Number(id))) {
      return handlerError(res, "INVALID_ID", 400);
    }

    try {
      const appointment = await this.appointmentService.getAppointmentById(
        Number(id)
      );
      if (!appointment) {
        handlerError(res, "APPOINTMENT_NOT_FOUND", 404);
      } else {
        res.status(200).json(appointment);
      }
    } catch (err) {
      if (err instanceof Error) {
        handlerError(res, "ERROR_GET_APPOINTMENT", 404);
      } else {
        handlerError(res, "UNKNOWN_ERROR", 500);
      }
    }
  }

  async createAppointment(req: Request, res: Response) {
    const { doctorId, patientId, appointmentDate, startTime, endTime } =
      req.body;
    if (!doctorId || !patientId || !appointmentDate || !startTime || !endTime) {
      return handlerError(res, "INVALID_INPUT", 400);
    }

    try {
      const appointment = await this.appointmentService.createAppointment(
        Number(doctorId),
        Number(patientId),
        new Date(appointmentDate),
        new Date(startTime),
        new Date(endTime)
      );
      res.status(201).json(appointment);
    } catch (err) {
      if (err instanceof Error && err.message === "APPOINTMENT_CONFLICT") {
        handlerError(res, "CONFLICTING_APPOINTMENT", 409);
      } else {
        handlerError(res, "ERROR_CREATING_APPOINTMENT", 500);
      }
    }
  }
}

export default new AppointmentController();
