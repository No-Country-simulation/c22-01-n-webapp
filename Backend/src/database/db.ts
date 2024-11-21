import dotenv from "dotenv";
import "reflect-metadata";
import { DataSource } from "typeorm";

dotenv.config();

// DB connection setup
export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST || "127.0.0.1",
  port: parseInt(process.env.DB_PORT || "5432"),
  username: process.env.DB_USERNAME || "postgres",
  password: process.env.DB_PASSWORD || "0224",
  database: process.env.DB_NAME || "MediConnect",
  synchronize: true, // Solo para desarrollo, elimina en producción
  logging: true, // Activa si necesitas ver las consultas SQL
  entities: [__dirname + "/models/*.ts"], // Define la ruta de las entidades
  migrations: [__dirname + "/migrations/*.ts"], // Define la ruta de las migraciones
});
