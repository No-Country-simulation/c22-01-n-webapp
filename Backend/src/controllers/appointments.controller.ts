import { AppDataSource } from "@config/database.config";
import { handlerError } from "@middlewares/error.handler";
import { Appointment } from "@models/appointments.model";
import { Request, Response } from "express";

class AppointmentController {
  //constructor() {}

  async getAppointments(_req: Request, res: Response) {
    try {
      const appointmentsRepository = AppDataSource.getRepository(Appointment);
      const appointments = await appointmentsRepository.find();
      res.status(200).json(appointments);
    } catch (err) {
      if (err instanceof Error) {
        handlerError(res, "ERROR_GET_USERS", 404);
      } else {
        handlerError(res, "UNKNOWN_ERROR", 500);
      }
    }
  }
}

export default new AppointmentController();
