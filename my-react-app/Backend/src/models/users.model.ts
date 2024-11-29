import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	ManyToOne,
	BaseEntity,
	JoinColumn,
} from "typeorm";
import { Role } from "./roles.model";

@Entity("users")
export class User extends BaseEntity {
	@PrimaryGeneratedColumn()
	pk_user: number;

	@Column({ length: 25 })
	name: string;

	@Column({ length: 25 })
	lastname: string;

	@Column("int")
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

	@ManyToOne(() => Role, (role) => role.users)
	@JoinColumn({ name: "fk_rol" })
	role: Role;

	@Column({ type: "varchar", length: 25, nullable: true })
	specialty: string | null;
}
