import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
} from "typeorm";
import { Patient } from "./patients.model";
import { Doctor } from "./doctors.model";

@Entity("appointments")
export class Appointment {
  @PrimaryGeneratedColumn()
  appointmentId: number;

  @CreateDateColumn()
  registrationDate: Date;

  @CreateDateColumn()
  appointmentDate: Date;

  @Column()
  isCancelled: boolean;

  @ManyToOne(() => Patient, (patient) => patient.appointments)
  patient: Patient;

  @ManyToOne(() => Doctor, (doctor) => doctor.appointments)
  doctor: Doctor;
}
