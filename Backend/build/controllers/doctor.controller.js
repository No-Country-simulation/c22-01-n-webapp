"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const error_handler_1 = require("@middlewares/error.handler");
const doctor_service_1 = require("@services/doctor.service");
class DoctorController {
    constructor() {
        this.doctorService = new doctor_service_1.DoctorService();
    }
    async getAllDoctors(_req, res) {
        try {
            const doctors = await this.doctorService.getAllDoctors();
            res.status(200).json(doctors);
        }
        catch (err) {
            if (err instanceof Error) {
                (0, error_handler_1.handlerError)(res, "ERROR_GET_DOCTORS", 404);
            }
            else {
                (0, error_handler_1.handlerError)(res, "UNKNOWN_ERROR", 500);
            }
        }
    }
    async getDoctorById(req, res) {
        const { id } = req.params;
        if (!id || isNaN(Number(id))) {
            (0, error_handler_1.handlerError)(res, "INVALID_ID", 400);
            return;
        }
        try {
            const doctor = await this.doctorService.getDoctorById(Number(id));
            if (!doctor) {
                return (0, error_handler_1.handlerError)(res, "DOCTOR_NOT_FOUND", 404);
            }
            res.status(200).json(doctor);
        }
        catch (err) {
            if (err instanceof Error) {
                (0, error_handler_1.handlerError)(res, "ERROR_GET_DOCTOR", 404);
            }
            else {
                (0, error_handler_1.handlerError)(res, "UNKNOWN_ERROR", 500);
            }
        }
    }
    async updateDoctor(req, res) {
        const { id } = req.params;
        if (!id || isNaN(Number(id))) {
            return (0, error_handler_1.handlerError)(res, "INVALID_ID", 400);
        }
        try {
            const updatedDoctor = await this.doctorService.updateDoctor(Number(id), req.body);
            if (!updatedDoctor) {
                return (0, error_handler_1.handlerError)(res, "DOCTOR_NOT_FOUND", 404);
            }
            res.status(200).json(updatedDoctor);
        }
        catch (err) {
            if (err instanceof Error) {
                (0, error_handler_1.handlerError)(res, "ERROR_UPDATE_DOCTOR", 400);
            }
            else {
                (0, error_handler_1.handlerError)(res, "UNKNOWN_ERROR", 500);
            }
        }
    }
}
exports.default = new DoctorController();
//# sourceMappingURL=doctor.controller.js.map