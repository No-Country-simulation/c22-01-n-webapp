"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const admins_model_1 = require("@models/admins.model");
const appointments_model_1 = require("@models/appointments.model");
const doctors_model_1 = require("@models/doctors.model");
const histories_model_1 = require("@models/histories.model");
const patients_model_1 = require("@models/patients.model");
const roles_model_1 = require("@models/roles.model");
const specialties_model_1 = require("@models/specialties.model");
const users_model_1 = require("@models/users.model");
const dotenv_1 = __importDefault(require("dotenv"));
require("reflect-metadata");
const typeorm_1 = require("typeorm");
dotenv_1.default.config();
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: 5432,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: true,
    logging: false,
    entities: [
        admins_model_1.Admin,
        appointments_model_1.Appointment,
        doctors_model_1.Doctor,
        histories_model_1.History,
        patients_model_1.Patient,
        roles_model_1.Role,
        specialties_model_1.Specialty,
        users_model_1.User,
    ],
});
//# sourceMappingURL=database.config.js.map