import { Request, Response } from "express";
import { Users } from "@models/user.model";

class UsersController {
  constructor() {}

  async getUsers(_req: Request, res: Response) {
    try {
      const users = await Users.find({ select: ["id", "firstName", "email"] });
      res.status(200).json(users);
    } catch (err) {
      if (err instanceof Error) {
        res.status(500).json({ error: err.message });
      }
    }
  }

  async getUserById(req: Request, res: Response) {
    const { userId } = req.params;
    if (!userId || isNaN(Number(userId))) {
      res.status(400).json({ error: "Invalid user ID" });
    }

    try {
      const user = await Users.findOneBy({ id: Number(userId) });
      if (!user) {
        res.status(404).json({ error: `User with ID ${userId} not found` });
      }
      res.status(200).json(user);
    } catch (err) {
      if (err instanceof Error) {
        res.status(500).json({ error: err.message });
      }
    }
  }

  async createUser(req: Request, res: Response) {
    try {
      const newUser = Users.create(req.body);
      const savedUser = await Users.save(newUser);
      res.status(201).json(savedUser);
    } catch (error) {
      res.status(400).json({ error: "Invalid user data" });
    }
  }

  async updateUser(req: Request, res: Response) {
    const { userId } = req.params;
    try {
      const user = await Users.findOneBy({ id: Number(userId) });
      if (!user) {
        throw new Error(`User ${userId} not found`);
      }
      const updatedUser = await Users.update({ id: Number(userId) }, req.body);
      res.status(200).json(updatedUser);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ error: error });
      }
    }
  }

  async deleteUser(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const result = await Users.delete({ id: Number(id) });
      if (result.affected === 0) {
        res.status(404).json({ error: `User ${id} not found` });
      }
      res.status(204).json();
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
}

export default new UsersController();
