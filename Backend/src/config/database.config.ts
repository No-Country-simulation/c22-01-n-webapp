import { Appointment } from "@models/appointments.model";
import { Histories } from "@models/histories.model";
import { Roles } from "@models/roles.model";
import { SpecialtyAndAppointment } from "@models/specialtiesappointments.model";
import { Specialties } from "@models/specialties.model";
import { Users } from "@models/user.model";
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
  synchronize: true, // Solo para desarrollo, elimina en producción
  logging: true,
  entities: [
    Appointment,
    Histories,
    Roles,
    Specialties,
    SpecialtyAndAppointment,
    Users,
  ],
  //migrations: [__dirname + "/migrations/*.ts"],
});
