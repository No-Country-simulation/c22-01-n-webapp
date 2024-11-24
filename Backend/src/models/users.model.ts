import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  BaseEntity,
  JoinColumn,
  OneToOne,
} from "typeorm";
import { Role } from "./roles.model";
import { Doctor } from "./doctors.model";
import { Patient } from "./patients.model";
import { Admin } from "./admins.model";

@Entity("users")
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  userId: number;

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

  @Column({ nullable: true })
  picture: string;

  @Column({ length: 20 })
  phone: string;

  @ManyToOne(() => Role, (role) => role.users)
  @JoinColumn({ name: "roleId" })
  role: Role;

  @OneToOne(() => Doctor, (doctor) => doctor.user)
  doctor: Doctor;

  @OneToOne(() => Patient, (patient) => patient.user)
  patient: Patient;

  @OneToOne(() => Admin, (admin) => admin.user)
  admin: Admin;
}
