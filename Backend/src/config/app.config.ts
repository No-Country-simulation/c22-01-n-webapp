import express, { Application } from "express";
import morgan from "morgan";
import userRoutes from "@routes/user.routes";
import cors from "cors";
import appointmentsRoutes from "@routes/appointments.routes";

const app: Application = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/api", userRoutes);
app.use("/api", appointmentsRoutes);

export default app;
