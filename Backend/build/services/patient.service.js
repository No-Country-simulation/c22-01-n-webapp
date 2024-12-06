"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientService = void 0;
const database_config_1 = require("@config/database.config");
const patients_model_1 = require("../models/patients.model");
class PatientService {
    constructor() {
        this.getAllPatients = async () => {
            const patientRepository = database_config_1.AppDataSource.getRepository(patients_model_1.Patient);
            const Patients = await patientRepository.find();
            return Patients;
        };
        this.getPatientById = async (patientId) => {
            const patientRepository = database_config_1.AppDataSource.getRepository(patients_model_1.Patient);
            const patient = await patientRepository.findOneBy({ patientId });
            return patient;
        };
        this.updatePatient = async (patientId, patientData) => {
            const patientRepository = database_config_1.AppDataSource.getRepository(patients_model_1.Patient);
            const patient = await patientRepository.findOneBy({
                patientId,
            });
            if (!patient) {
                throw new Error("PATIENT_NOT_FOUND");
            }
            const updatedPatient = Object.assign(patients_model_1.Patient, patientData);
            return await patientRepository.save(updatedPatient);
        };
    }
}
exports.PatientService = PatientService;
//# sourceMappingURL=patient.service.js.map