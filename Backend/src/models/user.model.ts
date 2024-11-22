import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  BaseEntity,
  JoinColumn,
} from "typeorm";
import { Roles } from "./roles.model";
import { Appointment } from "./appointments.model";
import { Histories } from "./histories.model";

@Entity("users")
export class Users extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 25 })
  firstName: string;

  @Column({ length: 25 })
  lastName: string;

  @Column()
  age: number;

  @Column({ unique: true, length: 255 })
  email: string;

  @Column({ length: 255 })
  password: string;

  @Column({ length: 100 })
  dni: string;

  @Column({ type: "text", nullable: true })
  picture: string | null;

  @Column({ length: 20 })
  phone: string;

  @ManyToOne(() => Roles, (role) => role.users)
  @JoinColumn({ name: "rolId" })
  rol: Roles;

  @OneToMany(() => Appointment, (appointment) => appointment.user)
  appointments: Appointment[];

  @OneToMany(() => Histories, (histories) => histories.user)
  histories: Histories[];
}
