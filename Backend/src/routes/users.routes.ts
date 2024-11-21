import { Request, Response, Router } from "express";
import { UserService } from "../services/user.service";
import { IUserService, IUserRepository } from "types/user.types";
import { UserRepository } from "repositories/userRepository";
import { Users } from "@models/userModel";

const router = Router();

const userRepository: IUserRepository = new UserRepository();
const userService: IUserService = new UserService(userRepository);

export default () => {
  router.get("/users", async (_req: Request, res: Response) => {
    const users = await userService.getAllUsers();
    res.json(users);
  });

  router.get("/users/:id", async (req: Request, res: Response) => {
    const user = await userService.getUserById(parseInt(req.params.id));
    if (user) {
      res.json(user);
    } else {
      res.status(404).send("User not found");
    }
  });

  router.post("/users", async (req: Request, res: Response) => {
    const newUser: Users = req.body;
    const createdUser = await userService.createUser(newUser);
    res.status(201).json(createdUser);
  });

  router.put("/users/:id", async (req: Request, res: Response) => {
    const updatedUser: Partial<Users> = req.body;
    const user = await userService.updateUser(
      parseInt(req.params.id),
      updatedUser
    );
    if (user) {
      res.json(user);
    } else {
      res.status(404).send("User not found");
    }
  });

  router.delete("/users/:id", async (req: Request, res: Response) => {
    const deleted = await userService.deleteUser(parseInt(req.params.id));
    if (deleted) {
      res.sendStatus(204);
    } else {
      res.status(404).send("User not found");
    }
  });

  return router;
};
