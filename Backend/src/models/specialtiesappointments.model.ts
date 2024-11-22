import { Entity, PrimaryGeneratedColumn, ManyToOne, Unique } from "typeorm";
import { Specialties } from "./specialties.model";
import { Appointment } from "./appointments.model";

@Entity("specialties_and_appointments")
@Unique(["specialty", "appointment"])
export class SpecialtyAndAppointment {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Specialties, (specialty) => specialty.specialtyAppointments)
  specialty: Specialties;

  @ManyToOne(
    () => Appointment,
    (appointment) => appointment.specialtyAppointments
  )
  appointment: Appointment;
}
