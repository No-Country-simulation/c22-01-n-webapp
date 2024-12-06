import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
  Check,
} from "typeorm";
import { Role } from "./roles.model";
import { Appointment } from "./appointments.model";
import { History } from "./histories.model";

@Entity("users")
@Check(`"fk_rol" = 2 OR "specialty" IS NULL`)
export class User {
  @PrimaryGeneratedColumn()
  pk_user: number;

  @Column({ length: 25 })
  name: string;

  @Column({ length: 25 })
  lastname: string;

  @Column({ type: "int" })
  age: number;

  @Column({ unique: true, length: 255 })
  email: string;

  @Column({ length: 255 })
  password: string;

  @Column({ unique: true, length: 100 })
  dni: string;

  @Column({ type: "text", nullable: true })
  picture: string | null;

  @Column({ length: 20, unique: true })
  phone: string;

  @ManyToOne(() => Role, (role) => role.users)
  @JoinColumn({ name: "fk_rol" })
  role: Role;

  @Column({ type: "varchar", length: 25, nullable: true })
  specialty: string | null;

  @OneToMany(() => Appointment, (appointment) => appointment.user)
  appointments: Appointment[];

  @OneToMany(() => History, (history) => history.user)
  histories: History[];
}
