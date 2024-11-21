import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { Appointment } from "./appointmentsModel";
import { Users } from "./userModel";

@Entity("histories")
export class Histories {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Users, (user) => user.histories)
  user: Users;

  @ManyToOne(() => Appointment, (appointment) => appointment.histories)
  appointment: Appointment;

  @Column()
  description: string;

  @Column()
  recipe: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
