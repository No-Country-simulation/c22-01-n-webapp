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

  @OneToOne(() => User, (user) => user.admin)
  @JoinColumn({ name: "userId" })
  user: User;

  @Column({ length: 50 })
  position: string;
}
