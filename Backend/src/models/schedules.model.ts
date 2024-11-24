import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Doctor } from "./doctors.model";

@Entity("schedules")
export class Schedule {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Doctor, (doctor) => doctor.schedule)
  doctor: Doctor;

  @Column({ length: 20 })
  day: string;

  @Column({ type: "time" })
  startTime: string;

  @Column({ type: "time" })
  endTime: string;
}
