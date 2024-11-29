"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const appointments_controller_1 = __importDefault(require("@controllers/appointments.controller"));
const router = (0, express_1.Router)();
exports.router = router;
router.get("/", appointments_controller_1.default.getAllAppointments);
router.get("/", appointments_controller_1.default.getAppointmentById);
router.get("/", appointments_controller_1.default.createAppointment);
//# sourceMappingURL=appointment.routes.js.map