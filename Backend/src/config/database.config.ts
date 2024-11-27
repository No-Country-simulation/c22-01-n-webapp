import { Admin } from "@models/admins.model";
import { Appointment } from "@models/appointments.model";
import { Doctor } from "@models/doctors.model";
import { History } from "@models/histories.model";
import { Patient } from "@models/patients.model";
import { Role } from "@models/roles.model";
import { Specialty } from "@models/specialties.model";
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
  synchronize: true, // Solo para desarrollo, elimina en producción
  logging: false,
  entities: [
    Admin,
    Appointment,
    Doctor,
    History,
    Patient,
    Role,
    Specialty,
    User,
  ],
  //migrations: [__dirname + "/migrations/*.ts"],
});
