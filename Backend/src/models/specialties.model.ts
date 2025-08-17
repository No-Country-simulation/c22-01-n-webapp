import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { UserSpecialty } from "./users_specialties.model";

@Entity("specialties")
export class Specialty {
	@PrimaryGeneratedColumn()
	id_specialty: number;

	@Column({
		type: "varchar",
		length: 100,
		unique: true,
		nullable: false,
	})
	specialty_name: string;

	@OneToMany(() => UserSpecialty, (us) => us.specialty)
	users: UserSpecialty[];
}
