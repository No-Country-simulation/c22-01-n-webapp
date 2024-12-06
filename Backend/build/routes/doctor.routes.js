"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const doctor_controller_1 = __importDefault(require("@controllers/doctor.controller"));
const express_1 = require("express");
const router = (0, express_1.Router)();
exports.router = router;
router.get("/", doctor_controller_1.default.getAllDoctors);
router.get("/", doctor_controller_1.default.getDoctorById);
router.get("/", doctor_controller_1.default.updateDoctor);
//# sourceMappingURL=doctor.routes.js.map