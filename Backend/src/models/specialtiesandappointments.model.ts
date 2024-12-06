import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  Unique,
  JoinColumn,
} from "typeorm";
import { Specialty } from "./specialties.model";
import { Appointment } from "./appointments.model";

@Entity("specialties_and_appointments")
@Unique(["specialty", "appointment"])
export class SpecialtyAndAppointment {
  @PrimaryGeneratedColumn({ name: "pk_specialty_and_appointment" })
  pk_specialtiesAndAppointments: number;

  @ManyToOne(
    () => Specialty,
    (specialty) => specialty.specialtiesAppointments,
    {
      eager: true,
    }
  )
  @JoinColumn({ name: "fk_specialty" })
  specialty: Specialty;

  @ManyToOne(
    () => Appointment,
    (appointment) => appointment.specialtiesAppointments,
    {
      eager: true,
    }
  )
  @JoinColumn({ name: "fk_appointment" })
  appointment: Appointment;
}
