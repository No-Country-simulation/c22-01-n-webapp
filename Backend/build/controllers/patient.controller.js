"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const error_handler_1 = require("@middlewares/error.handler");
const patient_service_1 = require("@services/patient.service");
class PatientController {
    constructor() {
        this.patientService = new patient_service_1.PatientService();
    }
    async getAllPatients(_req, res) {
        try {
            const patients = await this.patientService.getAllPatients();
            res.status(200).json(patients);
        }
        catch (err) {
            if (err instanceof Error) {
                (0, error_handler_1.handlerError)(res, "ERROR_GET_PATIENTS", 404);
            }
            else {
                (0, error_handler_1.handlerError)(res, "UNKNOWN_ERROR", 500);
            }
        }
    }
    async getPatientById(req, res) {
        const { id } = req.params;
        if (!id || isNaN(Number(id))) {
            (0, error_handler_1.handlerError)(res, "INVALID_ID", 400);
            return;
        }
        try {
            const patient = await this.patientService.getPatientById(Number(id));
            if (!patient) {
                return (0, error_handler_1.handlerError)(res, "PATIENT_NOT_FOUND", 404);
            }
            res.status(200).json(patient);
        }
        catch (err) {
            if (err instanceof Error) {
                (0, error_handler_1.handlerError)(res, "ERROR_GET_PATIENT", 404);
            }
            else {
                (0, error_handler_1.handlerError)(res, "UNKNOWN_ERROR", 500);
            }
        }
    }
    async updatePatient(req, res) {
        const { id } = req.params;
        if (!id || isNaN(Number(id))) {
            return (0, error_handler_1.handlerError)(res, "INVALID_ID", 400);
        }
        try {
            const updatedPatient = await this.patientService.updatePatient(Number(id), req.body);
            if (!updatedPatient) {
                return (0, error_handler_1.handlerError)(res, "PATIENT_NOT_FOUND", 404);
            }
            res.status(200).json(updatedPatient);
        }
        catch (err) {
            if (err instanceof Error) {
                (0, error_handler_1.handlerError)(res, "ERROR_UPDATE_PATIENT", 400);
            }
            else {
                (0, error_handler_1.handlerError)(res, "UNKNOWN_ERROR", 500);
            }
        }
    }
}
exports.default = new PatientController();
//# sourceMappingURL=patient.controller.js.map