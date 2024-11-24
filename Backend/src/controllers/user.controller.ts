import { Request, Response } from "express";
import { User } from "@models/users.model";
import { AppDataSource } from "@config/database.config";
import { Role } from "@models/roles.model";

class UsersController {
  //constructor() {}

  async getUsers(_req: Request, res: Response) {
    try {
      const users = await User.find({});
      res.status(200).json(users);
    } catch (err) {
      if (err instanceof Error) {
        res.status(500).json({ error: err.message });
      }
    }
  }

  async getUserById(req: Request, res: Response) {
    const { id } = req.params;
    if (!id || isNaN(Number(id))) {
      res.status(400).json({ error: "Invalid user ID. Must be a number." });
    }

    try {
      const user = await User.findOneBy({ userId: Number(id) });
      if (!user) {
        res.status(404).json({ error: `User with ID ${id} not found.` });
      }
      res.status(200).json(user);
    } catch (err) {
      if (err instanceof Error) {
        res.status(500).json({ error: err.message });
      } else {
        res.status(500).json({ error: "Unexpected error." });
      }
    }
  }

  async createUser(req: Request, res: Response) {
    try {
      const {
        firstName,
        lastName,
        age,
        email,
        password,
        dni,
        picture,
        phone,
        role,
      } = req.body;

      const roleRepository = AppDataSource.getRepository(Role);
      const roles = await roleRepository.findOne({ where: { roleId: role } });

      if (!roles) {
        res.status(400).json({ error: "The specified role does not exist." });
      }

      const userRepository = AppDataSource.getRepository(User);
      const user = userRepository.create({
        firstName,
        lastName,
        age,
        email,
        password,
        dni,
        picture,
        phone,
        role,
      });

      await userRepository.save(user);
      res.status(201).json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error to create the user." });
    }
  }

  async updateUser(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const user = await User.findOneBy({ userId: Number(id) });
      if (!user) {
        throw new Error(`User with ID ${id} not found.`);
      }
      await User.update({ userId: Number(id) }, req.body);
      const updatedUser = await User.findOneBy({ userId: Number(id) });
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
      const user = await User.findOneBy({ userId: Number(id) });
      if (!user) {
        throw new Error(`User with ID ${id} not found.`);
      }
      const result = await User.delete({ userId: Number(id) });
      if (!result) {
        res.status(404).json({ error: `User with ID ${id} not found.` });
      }
      res.status(204).json(`User with ID ${id} has been deleted.`);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
}

export default new UsersController();
