import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  BaseEntity,
} from "typeorm";
import { Roles } from "./roles.model";
import { Appointment } from "./appointments.model";
import { Histories } from "./histories.model";

@Entity("users")
export class Users extends BaseEntity {
  @PrimaryGeneratedColumn({ name: "pk_user" })
  id: number;

  @Column({ name: "name", length: 25 })
  firstName: string;

  @Column({ name: "lastname", length: 25 })
  lastName: string;

  @Column()
  age: number;

  @Column({ name: "email", unique: true, length: 255 })
  email: string;

  @Column({ name: "password", length: 255 })
  password: string;

  @Column({ name: "dni", length: 100 })
  dni: string;

  @Column({ name: "picture", type: "text", nullable: true })
  picture: string | null;

  @Column({ name: "phone", length: 20 })
  phone: string;

  @ManyToOne(() => Roles, (role) => role.users)
  rol: Roles;

  @OneToMany(() => Appointment, (appointment) => appointment.user)
  appointments: Appointment[];

  @OneToMany(() => Histories, (histories) => histories.user)
  histories: Histories[];
}
