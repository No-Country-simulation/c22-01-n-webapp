import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { User } from "./users.model";

@Entity("roles")
export class Role {
	@PrimaryGeneratedColumn()
	id_role: number;

	@Column({
		type: "varchar",
		length: 50,
		nullable: false,
	})
	role_name: string;

	@OneToMany(() => User, (user) => user.role)
	users: User[];
}
