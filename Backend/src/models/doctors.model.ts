import {
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  OneToOne,
  JoinColumn,
  ManyToMany,
  Column,
} from "typeorm";
import { User } from "./users.model";
import { Appointment } from "./appointments.model";
import { Specialty } from "./specialties.model";
import { Schedule } from "./schedules.model";

@Entity("doctors")
export class Doctor {
  @PrimaryGeneratedColumn()
  doctorId: number;

  @Column()
  licenseNumber: number;

  @OneToOne(() => User, (user) => user.doctor)
  @JoinColumn({ name: "userId" })
  user: User;

  @OneToMany(() => Appointment, (appointment) => appointment.doctor)
  appointments: Appointment[];

  @ManyToMany(() => Specialty, (specialty) => specialty.doctors)
  specialties: Specialty[];

  @OneToMany(() => Schedule, (schedule) => schedule.doctor)
  schedule: Schedule[];
}
