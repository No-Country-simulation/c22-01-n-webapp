import { Appointment } from "@models/appointments.model";
import { History } from "@models/histories.model";
import { Role } from "@models/roles.model";
import { Specialty } from "@models/specialties.model";
import { SpecialtyAndAppointment } from "@models/specialtiesandappointments.model";
import { User } from "@models/users.model";
import dotenv from "dotenv";
import "reflect-metadata";
import { DataSource } from "typeorm";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: 5432,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: false, // Solo para desarrollo, elimina en producción
  logging: false,
  entities: [
    Appointment,
    History,
    Role,
    Specialty,
    SpecialtyAndAppointment,
    User,
  ],
  //migrations: [__dirname + "/migrations/*.ts"],
});
