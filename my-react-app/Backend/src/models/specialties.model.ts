import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { SpecialtyAndAppointment } from "./specialtiesandappointments.model";

@Entity("specialties")
export class Specialty {
  @PrimaryGeneratedColumn()
  pk_specialty: number;

  @Column({ length: 50 })
  specialty: string;

  @OneToMany(
    () => SpecialtyAndAppointment,
    (specialtyAndAppointment) => specialtyAndAppointment.specialty
  )
  specialtiesAppointments: SpecialtyAndAppointment[];
}
