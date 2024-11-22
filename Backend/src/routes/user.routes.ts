import { Router } from "express";
import userController from "@controllers/user.controller";

const router = Router();

router.get("/users", userController.getUsers);
router.post("/user", userController.createUser);
router.get("/user/:id", userController.getUserById);
router.put("/user/:id", userController.updateUser);
router.delete("/user/:id", userController.deleteUser);

export default router;
