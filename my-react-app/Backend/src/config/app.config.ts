import express, { Application } from "express";
import morgan from "morgan";
import cors from "cors";
import { router } from "@routes/index.routes";

const app: Application = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(router);

export default app;
