import { Router } from "express";
import historyController from "@controllers/histories.controller";

const router = Router();

router.get("/", historyController.getAllHistories);
router.get("/:id", historyController.getHistoryById);
router.post("/", historyController.createHistory);

export { router };
