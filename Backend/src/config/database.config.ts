import { Appointment } from "@models/appointments.model";
import { History } from "@models/histories.model";
import { Role } from "@models/roles.model";
import { Specialty } from "@models/specialties.model";
import { SpecialtyAndAppointment } from "@models/specialtiesandappointments.model";
import { User } from "@models/users.model";
import { DataSource } from "typeorm";
import * as dotenv from "dotenv";
import "reflect-metadata";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DATABASE_HOST,
  port: 5432,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  synchronize: false, // Esto creará las tablas si no existen en la base de datos
  logging: true,
  ssl: {
    rejectUnauthorized: false,
  },
  entities: [
    Appointment,
    History,
    Role,
    Specialty,
    SpecialtyAndAppointment,
    User,
  ],
});
