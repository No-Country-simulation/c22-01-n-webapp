import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { SpecialtyAndAppointment } from "./specialtiesappointments.model";

@Entity("specialties")
export class Specialties {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  name: string;

  @OneToMany(
    () => SpecialtyAndAppointment,
    (specialtyAndAppointment) => specialtyAndAppointment.specialty
  )
  specialtyAppointments: SpecialtyAndAppointment[];
}
