import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	ManyToOne,
	OneToMany,
	JoinColumn,
} from "typeorm";
import { Role } from "./roles.model";
import { Appointment } from "./appointments.model";
import { History } from "./histories.model";
import { UserSpecialty } from "./users_specialties.model";

@Entity("users")
export class User {
	@PrimaryGeneratedColumn()
	id_user: number;

	@Column({
		type: "varchar",
		length: 50,
		nullable: false,
	})
	first_name: string;

	@Column({
		type: "varchar",
		length: 50,
		nullable: false,
	})
	last_name: string;

	@Column({
		type: "varchar",
		length: 255,
		unique: true,
		nullable: false,
	})
	email: string;

	@Column({
		type: "varchar",
		length: 255,
		nullable: false,
	})
	password: string;

	@Column({
		type: "varchar",
		length: 5,
		nullable: false,
	})
	document_type: string;

	@Column({
		type: "varchar",
		length: 30,
		unique: true,
		nullable: false,
	})
	document_number: string;

	@Column({
		type: "varchar",
		length: 20,
		unique: true,
		nullable: false,
	})
	phone: string;

	@Column({
		type: "text",
		nullable: true,
	})
	picture: string;

	@Column({
		type: "varchar",
		length: 50,
		nullable: true,
	})
	license_number: string;

	@ManyToOne(() => Role, (role) => role.users, {
		nullable: false,
	})
	@JoinColumn({ name: "fk_role" })
	role: Role;

	@OneToMany(() => Appointment, (appointment) => appointment.patient)
	patientAppointments: Appointment[];

	@OneToMany(() => Appointment, (appointment) => appointment.doctor)
	doctorAppointments: Appointment[];

	@OneToMany(() => History, (history) => history.patient)
	patientHistories: History[];

	@OneToMany(() => History, (history) => history.doctor)
	doctorHistories: History[];

	@OneToMany(() => UserSpecialty, (us) => us.user)
	specialties: UserSpecialty[];
}
