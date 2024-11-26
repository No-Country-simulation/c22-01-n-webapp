import { Request, Response } from "express";
import { User } from "@models/users.model";
import { AppDataSource } from "@config/database.config";
import { Role } from "@models/roles.model";
import { handlerError } from "@middlewares/error.handler";

class UsersController {
  // Constructor opcional si lo necesitas
  // constructor() {}

  // Obtener todos los usuarios
  async getUsers(_req: Request, res: Response) {
    try {
      const users = await User.find({});
      res.status(200).json(users);
    } catch (err) {
      if (err instanceof Error) {
        handlerError(res, "ERROR_GET_USERS", 404);
      } else {
        handlerError(res, "UNKNOWN_ERROR", 500);
      }
    }
  }

  // Obtener un usuario por ID
  async getUserById(req: Request, res: Response) {
    const { id } = req.params;

    // Validación del ID
    if (!id || isNaN(Number(id))) {
      handlerError(res, "INVALID_USER_ID", 400);
      return; // Aseguramos que no continúe si el ID no es válido
    }

    try {
      const user = await User.findOneBy({ userId: Number(id) });
      if (!user) {
        handlerError(res, "USER_NOT_FOUND", 404); // No encontrado
        return;
      }
      res.status(200).json(user);
    } catch (err) {
      if (err instanceof Error) {
        handlerError(res, "ERROR_GET_USER", 404);
      } else {
        handlerError(res, "UNKNOWN_ERROR", 500);
      }
    }
  }

  // Crear un nuevo usuario
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
        handlerError(res, "ROLE_NOT_FOUND", 400); // Rol no encontrado
        return;
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
      handlerError(res, "ERROR_CREATE_USER", 500); // Error al crear usuario
    }
  }

  // Actualizar un usuario
  async updateUser(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const user = await User.findOneBy({ userId: Number(id) });
      if (!user) {
        handlerError(res, "USER_NOT_FOUND", 404); // Usuario no encontrado
        return;
      }
      await User.update({ userId: Number(id) }, req.body);
      const updatedUser = await User.findOneBy({ userId: Number(id) });
      res.status(200).json(updatedUser);
    } catch (error) {
      handlerError(res, "ERROR_UPDATE_USER", 500); // Error al actualizar usuario
    }
  }

  // Eliminar un usuario
  async deleteUser(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const user = await User.findOneBy({ userId: Number(id) });
      if (!user) {
        handlerError(res, "USER_NOT_FOUND", 404); // Usuario no encontrado
        return;
      }
      const result = await User.delete({ userId: Number(id) });
      if (!result) {
        handlerError(res, "USER_NOT_FOUND", 404); // Usuario no encontrado
        return;
      }
      res.status(204).json({ message: `User with ID ${id} has been deleted.` });
    } catch (error) {
      handlerError(res, "ERROR_DELETE_USER", 500); // Error al eliminar usuario
    }
  }
}

export default new UsersController();
