import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	ManyToOne,
	JoinColumn,
	OneToMany,
} from "typeorm";
import { User } from "./users.model";
import { History } from "./histories.model";

@Entity("appointments")
export class Appointment {
	@PrimaryGeneratedColumn()
	id_appointment: number;

	@ManyToOne(() => User, (user) => user.patientAppointments, {
		nullable: false,
	})
	@JoinColumn({
		name: "fk_patient",
	})
	patient: User;

	@ManyToOne(() => User, (user) => user.doctorAppointments, {
		nullable: false,
	})
	@JoinColumn({ name: "fk_doctor" })
	doctor: User;

	@Column({
		type: "timestamp",
		default: () => "CURRENT_TIMESTAMP",
	})
	registration_date: Date;

	@Column({
		type: "date",
		nullable: false,
	})
	appointment_date: string;

	@Column({
		type: "time",
		nullable: false,
	})
	appointment_time: string;

	@Column({
		type: "varchar",
		length: 20,
		nullable: false,
	})
	status: string; // 'SCHEDULED', 'COMPLETED', 'CANCELLED'

	@OneToMany(() => History, (history) => history.appointment)
	histories: History[];
}
