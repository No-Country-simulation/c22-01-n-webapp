"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoctorService = void 0;
const database_config_1 = require("@config/database.config");
const doctors_model_1 = require("@models/doctors.model");
class DoctorService {
    constructor() {
        this.getAllDoctors = async () => {
            const doctorRepository = database_config_1.AppDataSource.getRepository(doctors_model_1.Doctor);
            const doctors = await doctorRepository.find();
            return doctors;
        };
        this.getDoctorById = async (doctorId) => {
            const doctorRepository = database_config_1.AppDataSource.getRepository(doctors_model_1.Doctor);
            const doctor = await doctorRepository.findOneBy({ doctorId });
            return doctor;
        };
        this.updateDoctor = async (doctorId, doctorData) => {
            const doctorRepository = database_config_1.AppDataSource.getRepository(doctors_model_1.Doctor);
            const doctor = await doctorRepository.findOneBy({
                doctorId,
            });
            if (!doctor) {
                throw new Error("DOCTOR_NOT_FOUND");
            }
            const updatedDoctor = Object.assign(doctor, doctorData);
            return await doctorRepository.save(updatedDoctor);
        };
    }
}
exports.DoctorService = DoctorService;
//# sourceMappingURL=doctor.service.js.map