import { AppDataSource } from "@config/database.config";
import { Patient } from "../models/patients.model";

export class PatientService {
  getAllPatients = async (): Promise<Patient[]> => {
    const patientRepository = AppDataSource.getRepository(Patient);
    const Patients = await patientRepository.find();
    return Patients;
  };

  getPatientById = async (patientId: number): Promise<Patient | null> => {
    const patientRepository = AppDataSource.getRepository(Patient);
    const patient = await patientRepository.findOneBy({ patientId });
    return patient;
  };

  updatePatient = async (
    patientId: number,
    patientData: Partial<Patient>
  ): Promise<Patient> => {
    const patientRepository = AppDataSource.getRepository(Patient);

    const patient = await patientRepository.findOneBy({
      patientId,
    });
    if (!patient) {
      throw new Error("PATIENT_NOT_FOUND");
    }

    const updatedPatient = Object.assign(Patient, patientData);
    return await patientRepository.save(updatedPatient);
  };
}
