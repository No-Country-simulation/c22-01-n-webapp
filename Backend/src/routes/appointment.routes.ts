import { Router } from "express";
import appointmentsController from "@controllers/appointments.controller";

const router = Router();

router.get("/", appointmentsController.getAppointments);
//router.post("/appointment", appointmentsController.createAppointments);

export { router };
