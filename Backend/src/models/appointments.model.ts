import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { SpecialtyAndAppointment } from "./specialtiesappointments.model";
import { Users } from "./user.model";
import { Histories } from "./histories.model";

@Entity("appointments")
export class Appointment {
  @PrimaryGeneratedColumn({ name: "pk_appointment" })
  id: number;

  @ManyToOne(() => Users, (user) => user.appointments)
  user: Users;

  @Column({
    name: "registration_date",
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP",
  })
  registrationDate: Date;

  @Column({ name: "appointment_date", type: "timestamp", nullable: true })
  appointmentDate: Date;

  @Column({ name: "is_cancelled", type: "boolean" })
  isCancelled: boolean;

  @OneToMany(
    () => SpecialtyAndAppointment,
    (specialtyAndAppointment) => specialtyAndAppointment.appointment
  )
  specialtyAppointments: SpecialtyAndAppointment[];

  @OneToMany(() => Histories, (histories) => histories.appointment)
  histories: Histories[];
}
