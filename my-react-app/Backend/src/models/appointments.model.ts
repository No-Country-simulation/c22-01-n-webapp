import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  CreateDateColumn,
  JoinColumn,
} from "typeorm";
import { User } from "./users.model";
import { SpecialtyAndAppointment } from "./specialtiesandappointments.model";
import { History } from "./histories.model";

@Entity("appointments")
export class Appointment {
  @PrimaryGeneratedColumn()
  pk_appointment: number;

  @CreateDateColumn({ name: "registration_date" })
  registrationDate: Date;

  @Column({ name: "appointment_date", nullable: true })
  appointmentDate: Date;

  @Column({ name: "hour_appointment", type: "time", nullable: true })
  hourAppointment: string;

  @Column({ name: "is_cancelled", default: false })
  isCancelled: boolean;

  @ManyToOne(() => User, (user) => user.appointments)
  @JoinColumn({ name: "fk_user" })
  user: User;

  @OneToMany(
    () => SpecialtyAndAppointment,
    (specialtyAndAppointment) => specialtyAndAppointment.appointment
  )
  specialtiesAppointments: SpecialtyAndAppointment[];

  @OneToMany(() => History, (history) => history.appointment)
  histories: History[];
}
