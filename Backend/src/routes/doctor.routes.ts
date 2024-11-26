import doctorController from "@controllers/doctor.controller";
import { Router } from "express";

const router = Router();

router.get("/", doctorController.getDoctor);

export { router };
