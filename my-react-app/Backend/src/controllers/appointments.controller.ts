import { Request, Response } from "express";
import { Appointment } from "@models/appointments.model";
import { AppointmentService } from "@services/appointment.service";
import { handlerError } from "@middlewares/error.handler";

class AppointmentController {
  private readonly appointmentService: AppointmentService;

  constructor() {
    this.appointmentService = new AppointmentService();
  }

  getAllAppointments = async (
    _req: Request,
    res: Response
  ): Promise<Appointment[] | any> => {
    try {
      // Llamada al servicio para obtener todas las citas
      const appointments = await this.appointmentService.getAllAppointment();

      // Verificar si no hay citas disponibles
      if (!appointments || appointments.length === 0) {
        return handlerError(
          res,
          "No se encuentran registrosa en la base de datos",
          404
        );
      }

      // Retornar las citas con una respuesta exitosa
      return res
        .status(200)
        .json({ message: "Lista de Citas", list: appointments });
    } catch (error) {
      // Manejo de errores en caso de que algo falle en el servicio
      return handlerError(res, "Internal Server Error", 500);
    }
  };

  getAppointmentById = async (
    req: Request,
    res: Response
  ): Promise<Appointment | any> => {
    const id = Number(req.params.id);

    // Validar el ID recibido
    if (!id || isNaN(Number(id))) {
      return handlerError(res, "ID Invalido", 400);
    }

    try {
      const appointment = await this.appointmentService.getAppointmentById(id);
      // Manejar el caso en que no se encuentre la cita
      if (!appointment) {
        return handlerError(res, "Cita no encontrada", 404);
      }

      // Retornar la cita encontrada
      return res.status(200).json({
        message: "Información de la cita",
        appointment,
      });
    } catch (err) {
      // Manejar cualquier error inesperado
      return handlerError(res, "Error al obtener la Cita", 500);
    }
  };

  // Crear cita
  createAppointment = async (req: Request, res: Response) => {
    try {
      const appointment = await this.appointmentService.createAppointment(
        req.body
      );
      res.status(201).json({
        message: "Cita creada exitosamente",
        appointment,
      });
    } catch (err) {
      if (err instanceof Error && err.message === "APPOINTMENT_CONFLICT") {
        handlerError(
          res,
          "El horario no está disponible. Por favor, elija otro.",
          409
        );
      } else {
        handlerError(res, "Error desconocido al crear la cita.", 500);
      }
    }
  };
}

export default new AppointmentController();
