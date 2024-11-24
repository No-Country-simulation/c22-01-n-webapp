import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { User } from "./users.model";

@Entity("roles")
export class Role {
  @PrimaryGeneratedColumn()
  roleId: number;

  @Column({ length: 50 })
  name: string;

  @OneToMany(() => User, (user) => user.role)
  users: User[];
}
