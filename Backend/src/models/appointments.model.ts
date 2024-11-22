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
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Users, (user) => user.appointments)
  user: Users;

  @Column({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP",
  })
  registrationDate: Date;

  @Column({ type: "timestamp", nullable: true })
  appointmentDate: Date;

  @Column({ type: "boolean" })
  isCancelled: boolean;

  @OneToMany(
    () => SpecialtyAndAppointment,
    (specialtyAndAppointment) => specialtyAndAppointment.appointment
  )
  specialtyAppointments: SpecialtyAndAppointment[];

  @OneToMany(() => Histories, (histories) => histories.appointment)
  histories: Histories[];
}
