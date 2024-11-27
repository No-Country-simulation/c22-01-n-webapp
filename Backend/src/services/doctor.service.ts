import { AppDataSource } from "@config/database.config";
import { Doctor } from "@models/doctors.model";

export class DoctorService {
  getAllDoctors = async (): Promise<Doctor[]> => {
    const doctorRepository = AppDataSource.getRepository(Doctor);
    const doctors = await doctorRepository.find();
    return doctors;
  };

  getDoctorById = async (doctorId: number): Promise<Doctor | null> => {
    const doctorRepository = AppDataSource.getRepository(Doctor);
    const doctor = await doctorRepository.findOneBy({ doctorId });
    return doctor;
  };

  updateDoctor = async (
    doctorId: number,
    doctorData: Partial<Doctor>
  ): Promise<Doctor> => {
    const doctorRepository = AppDataSource.getRepository(Doctor);

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
