import { handlerError } from "@middlewares/error.handler";
import { DoctorService } from "@services/doctor.service";
import { Request, Response } from "express";

class DoctorController {
  private readonly doctorService: DoctorService;
  constructor() {
    this.doctorService = new DoctorService();
  }

  async getAllDoctors(_req: Request, res: Response) {
    try {
      const doctors = await this.doctorService.getAllDoctors();
      res.status(200).json(doctors);
    } catch (err) {
      if (err instanceof Error) {
        handlerError(res, "ERROR_GET_DOCTORS", 404);
      } else {
        handlerError(res, "UNKNOWN_ERROR", 500);
      }
    }
  }
  async getDoctorById(req: Request, res: Response) {
    const { id } = req.params;

    if (!id || isNaN(Number(id))) {
      handlerError(res, "INVALID_ID", 400);
      return;
    }

    try {
      const doctor = await this.doctorService.getDoctorById(Number(id));
      if (!doctor) {
        return handlerError(res, "DOCTOR_NOT_FOUND", 404);
      }

      res.status(200).json(doctor);
    } catch (err) {
      if (err instanceof Error) {
        handlerError(res, "ERROR_GET_DOCTOR", 404);
      } else {
        handlerError(res, "UNKNOWN_ERROR", 500);
      }
    }
  }

  async updateDoctor(req: Request, res: Response) {
    const { id } = req.params;

    // Validación del ID
    if (!id || isNaN(Number(id))) {
      return handlerError(res, "INVALID_ID", 400);
    }
    try {
      const updatedDoctor = await this.doctorService.updateDoctor(
        Number(id),
        req.body
      );
      if (!updatedDoctor) {
        return handlerError(res, "DOCTOR_NOT_FOUND", 404);
      }
      res.status(200).json(updatedDoctor);
    } catch (err) {
      if (err instanceof Error) {
        handlerError(res, "ERROR_UPDATE_DOCTOR", 400);
      } else {
        handlerError(res, "UNKNOWN_ERROR", 500);
      }
    }
  }
}

export default new DoctorController();
