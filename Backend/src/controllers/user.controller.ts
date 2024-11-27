import { Request, Response } from "express";
import { handlerError } from "@middlewares/error.handler";
import { UserService } from "@services/user.service";

class UserController {
  private readonly userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  // Obtener todos los usuarios
  async getAllUsers(_req: Request, res: Response) {
    try {
      const users = await this.userService.getAllUsers();
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

    if (!id || isNaN(Number(id))) {
      handlerError(res, "INVALID_USER_ID", 400);
      return;
    }

    try {
      const user = await this.userService.getUserById(Number(id));
      if (!user) {
        handlerError(res, "USER_NOT_FOUND", 404);
        return;
      }

      res.status(200).json(user);
    } catch (err) {
      if (err instanceof Error) {
        handlerError(res, "ERROR_GET_USER", 404);
      }
    }
  }

  // Crear un nuevo usuario
  createUser = async (req: Request, res: Response) => {
    try {
      const { userName, email, password, role } = req.body;
      const user = this.userService.createUser(userName, email, password, role);
      res.status(201).json(user);
    } catch (err) {
      if (err instanceof Error) {
        handlerError(res, "ERROR_CREATE_USER", 400);
      } else {
        handlerError(res, "UNKNOWN_ERROR", 500);
      }
    }
  };

  // Eliminar un usuario
  async deleteUser(req: Request, res: Response) {
    const { id } = req.params;
    if (!id || isNaN(Number(id))) {
      return handlerError(res, "INVALID_USER_ID", 400);
    }

    try {
      const result = await this.userService.deleteUser(Number(id));
      if (!result) {
        return handlerError(res, "USER_NOT_FOUND", 404);
      }

      res.status(204).json({ message: `User with ID ${id} has been deleted.` });
    } catch (err) {
      handlerError(res, "UNKNOWN_ERROR", 500);
    }
  }
}

export default new UserController();
