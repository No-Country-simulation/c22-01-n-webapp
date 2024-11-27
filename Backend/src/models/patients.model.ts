import {
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  OneToOne,
  JoinColumn,
  Column,
} from "typeorm";
import { User } from "./users.model";
import { Appointment } from "./appointments.model";
import { History } from "./histories.model";

@Entity("patients")
export class Patient {
  @PrimaryGeneratedColumn()
  patientId: number;

  @Column()
  age: number;

  @Column({ length: 20 })
  dni: string;

  @Column()
  healthInsurance: string;

  @Column({ length: 15 })
  phone: string;

  @Column()
  address: string;

  @OneToOne(() => User, (user) => user.patient)
  @JoinColumn({ name: "userId" })
  user: User;

  @OneToMany(() => Appointment, (appointment) => appointment.patient)
  appointments: Appointment[];

  @OneToMany(() => History, (history) => history.patient)
  histories: History[];
}
