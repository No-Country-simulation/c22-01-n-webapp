import appointmentsController from "@controllers/appointments.controller";
import { Router } from "express";

const router = Router();

router.get("/", appointmentsController.getAllAppointments);
router.get("/:id", appointmentsController.getAppointmentById);
router.post("/", appointmentsController.createAppointment);

export { router };
