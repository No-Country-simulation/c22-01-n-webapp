import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	ManyToOne,
	JoinColumn,
} from "typeorm";
import { User } from "./users.model";
import { Appointment } from "./appointments.model";

@Entity("histories")
export class History {
	@PrimaryGeneratedColumn()
	id_history: number;

	@ManyToOne(() => User, (user) => user.patientHistories, { nullable: false })
	@JoinColumn({
		name: "fk_patient",
	})
	patient: User;

	@ManyToOne(() => User, (user) => user.doctorHistories, { nullable: false })
	@JoinColumn({
		name: "fk_doctor",
	})
	doctor: User;

	@ManyToOne(() => Appointment, (appointment) => appointment.histories, {
		nullable: false,
	})
	@JoinColumn({
		name: "fk_appointment",
	})
	appointment: Appointment;

	@Column({
		type: "text",
		nullable: false,
	})
	description: string;

	@Column({
		type: "text",
		nullable: false,
	})
	prescription: string;

	@Column({
		type: "timestamp",
		default: () => "CURRENT_TIMESTAMP",
	})
	created_at: Date;
}
