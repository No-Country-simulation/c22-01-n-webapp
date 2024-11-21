import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { SpecialtyAndAppointment } from "./specialtiesappointmentsModel";

@Entity("specialties")
export class Specialties {
  @PrimaryGeneratedColumn({ name: "pk_specialty" })
  id: number;

  @Column({ name: "specialty", length: 50 })
  name: string;

  @OneToMany(
    () => SpecialtyAndAppointment,
    (specialtyAndAppointment) => specialtyAndAppointment.specialty
  )
  specialtyAppointments: SpecialtyAndAppointment[];
}
