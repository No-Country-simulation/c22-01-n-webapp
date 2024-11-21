import express, { Application } from "express";
import morgan from "morgan";
import userRoutes from "@routes/users.routes";
import cors from "cors";

const app: Application = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/api", userRoutes());

export default app;
