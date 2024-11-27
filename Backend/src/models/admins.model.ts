import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { User } from "./users.model";

@Entity("admins")
export class Admin {
  @PrimaryGeneratedColumn()
  adminId: number;

  @Column({ length: 20 })
  dni: string;

  @Column({ length: 50 })
  position: string;

  @OneToOne(() => User, (user) => user.admin)
  @JoinColumn({ name: "userId" })
  user: User;
}
