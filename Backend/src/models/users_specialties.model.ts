import {
	Entity,
	PrimaryGeneratedColumn,
	ManyToOne,
	JoinColumn,
	Unique,
} from "typeorm";
import { User } from "./users.model";
import { Specialty } from "./specialties.model";

@Entity("users_specialties")
@Unique(["user", "specialty"])
export class UserSpecialty {
	@PrimaryGeneratedColumn()
	id_user_specialty: number;

	@ManyToOne(() => User, (user) => user.specialties, {
		nullable: false,
	})
	@JoinColumn({
		name: "fk_user",
	})
	user: User;

	@ManyToOne(() => Specialty, (specialty) => specialty.users, {
		nullable: false,
	})
	@JoinColumn({
		name: "fk_specialty",
	})
	specialty: Specialty;
}
