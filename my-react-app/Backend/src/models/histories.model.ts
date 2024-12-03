import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
} from "typeorm";
import { User } from "./users.model";
import { Appointment } from "./appointments.model";

@Entity("histories")
export class History {
  @PrimaryGeneratedColumn()
  pk_history: number;

  @Column({ type: "text" })
  description: string;

  @Column({ type: "text" })
  recipe: string;

  @CreateDateColumn({ name: "date" })
  registrationDate: Date;

  @ManyToOne(() => User, (user) => user.histories)
  @JoinColumn({ name: "fk_user" })
  user: User;

  @ManyToOne(() => Appointment, (appointment) => appointment.histories)
  @JoinColumn({ name: "fk_appointment" })
  appointment: Appointment;
}
