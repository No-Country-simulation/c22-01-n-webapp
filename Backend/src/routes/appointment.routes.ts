import { Router } from "express";
import appointmentsController from "@controllers/appointments.controller";

const router = Router();

router.get("/", appointmentsController.getAllAppointments);
router.get("/", appointmentsController.getAppointmentById);
router.get("/", appointmentsController.createAppointment);

export { router };
