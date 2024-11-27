import doctorController from "@controllers/doctor.controller";
import { Router } from "express";

const router = Router();

router.get("/", doctorController.getAllDoctors);
router.get("/", doctorController.getDoctorById);
router.get("/", doctorController.updateDoctor);

export { router };
