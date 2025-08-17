import { Appointment } from "@models/appointments.model";
import { History } from "@models/histories.model";
import { Role } from "@models/roles.model";
import { Specialty } from "@models/specialties.model";
import { UserSpecialty } from "@models/users_specialties.model";
import { User } from "@models/users.model";
import { DataSource } from "typeorm";
import * as dotenv from "dotenv";
import "reflect-metadata";

dotenv.config();

export const AppDataSource = new DataSource({
	type: "postgres",
	url: process.env.DATABASE_URL,
	synchronize: false,
	logging: true,
	ssl: {
		rejectUnauthorized: false, // necesario para Neon
	},
	entities: [Role, User, Specialty, UserSpecialty, Appointment, History],
});
