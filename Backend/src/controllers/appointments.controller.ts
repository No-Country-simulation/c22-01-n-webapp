import { AppDataSource } from "@config/database.config";
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
        console.error(err);
        res.status(500).json({ error: "Error to get appointments." });
      }
    }
  }
/*
  async createAppointments(req: Request, res: Response) {
    const { id } = req.params;
    if (!id || isNaN(Number(id))) {
      res.status(400).json({ error: "Invalid user ID. Must be a number." });
    }
    try {
      const user = await Users.findOneBy({ id: Number(id) });
      const { id, user, isCancelled, specialtyAppointments, histories } =
        req.body;

      const appointmentsRepository = AppDataSource.getRepository(Appointment);
      const appointments = appointmentsRepository.create({
        id,
        user,
        isCancelled,
        specialtyAppointments,
        histories,
      });

      await appointmentsRepository.save(appointments);
      res.status(201).json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error to create the appointments." });
    }
  }*/
}

export default new AppointmentController();
