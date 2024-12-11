import { Router } from "express";
import userController from "@controllers/user.controller";

const router = Router();

router.get("/usersList", userController.getAllUsersController);
router.get("/:id", userController.getUserByIdController);
router.post("/register", userController.createUserController);
router.post("/login", userController.loginController);

export { router };
