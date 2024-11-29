import { handlerError } from "@middlewares/error.handler";
import { PatientService } from "@services/patient.service";
import { Request, Response } from "express";

class PatientController {
  private readonly patientService: PatientService;
  constructor() {
    this.patientService = new PatientService();
  }
  async getAllPatients(_req: Request, res: Response) {
    try {
      const patients = await this.patientService.getAllPatients();
      res.status(200).json(patients);
    } catch (err) {
      if (err instanceof Error) {
        handlerError(res, "ERROR_GET_PATIENTS", 404);
      } else {
        handlerError(res, "UNKNOWN_ERROR", 500);
      }
    }
  }
  async getPatientById(req: Request, res: Response) {
    const { id } = req.params;

    if (!id || isNaN(Number(id))) {
      handlerError(res, "INVALID_ID", 400);
      return;
    }

    try {
      const patient = await this.patientService.getPatientById(Number(id));
      if (!patient) {
        return handlerError(res, "PATIENT_NOT_FOUND", 404);
      }

      res.status(200).json(patient);
    } catch (err) {
      if (err instanceof Error) {
        handlerError(res, "ERROR_GET_PATIENT", 404);
      } else {
        handlerError(res, "UNKNOWN_ERROR", 500);
      }
    }
  }

  async updatePatient(req: Request, res: Response) {
    const { id } = req.params;

    // Validación del ID
    if (!id || isNaN(Number(id))) {
      return handlerError(res, "INVALID_ID", 400);
    }
    try {
      const updatedPatient = await this.patientService.updatePatient(
        Number(id),
        req.body
      );
      if (!updatedPatient) {
        return handlerError(res, "PATIENT_NOT_FOUND", 404);
      }
      res.status(200).json(updatedPatient);
    } catch (err) {
      if (err instanceof Error) {
        handlerError(res, "ERROR_UPDATE_PATIENT", 400);
      } else {
        handlerError(res, "UNKNOWN_ERROR", 500);
      }
    }
  }
}
export default new PatientController();
