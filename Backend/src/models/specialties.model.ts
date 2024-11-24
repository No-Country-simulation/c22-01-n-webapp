import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
} from "typeorm";
import { Doctor } from "./doctors.model";

@Entity("specialties")
export class Specialty {
  @PrimaryGeneratedColumn()
  specialtyId: number;

  @Column({ length: 50, unique: true })
  name: string;

  @ManyToMany(() => Doctor, (doctor) => doctor.specialties)
  doctors: Doctor[];
}
