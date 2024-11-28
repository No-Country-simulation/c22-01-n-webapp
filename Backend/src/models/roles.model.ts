import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { User } from "./users.model";

@Entity("roles")
export class Role {
  @PrimaryGeneratedColumn()
  pk_rol: number;

  @Column({ length: 50 })
  rol: string;

  @OneToMany(() => User, (user) => user.role)
  users: User[];
}
