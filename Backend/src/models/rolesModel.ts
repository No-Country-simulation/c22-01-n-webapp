import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Users } from "./userModel";

@Entity("roles")
export class Roles {
  @PrimaryGeneratedColumn({ name: "pk_rol" })
  id: number;

  @Column({ name: "rol", length: 50 })
  name: string;

  @OneToMany(() => Users, (user) => user.rol)
  users: Users[];
}
