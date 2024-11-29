import { Request, Response } from "express";
import { UserService } from "@services/user.service";
import { handlerError } from "@middlewares/error.handler";

class UserController {
  // INSTANCIAMOS NUESTRA CLASE USUARIO SERVICES
	private readonly userService: UserService;

  constructor() {
    // INICIALIZAMOS EL OBJETO USERSERVICES
		this.userService = new UserService();
	}

	// OBTENER LISTA DE USUARIOS
	getAllUsersController = async (
		_req: Request,
		res: Response
	): Promise<Response | any> => {
		try {
			const users = await this.userService.getAllUsersService();

			if (users.length === 0) {
			}

			res
				.status(200)
				.json(
					users.length === 0
						? "No hay registros en la base de datos"
						: { message: "Lista de Usuarios", list: users }
				);
		} catch (err) {
			if (err instanceof Error) {
				handlerError(res, "ERROR_GET_USERS", 404);
			} else {
				handlerError(res, "UNKNOWN_ERROR", 500);
			}
		}
	};

	// OBTENER USUARIO POR ID
	getUserByIdController = async (req: Request, res: Response) => {
		try {
			const id = parseInt(req.params["id"]);

			const user = await this.userService.getUserById(id);

			res
				.status(200)
				.json(
					!user ? { message: `NO SE ENCONTRO REGISTRO CON EL ID ${id}` } : user
				);
		} catch (err) {
			if (err instanceof Error) {
				handlerError(res, `${err.message}`, 404);
			}
		}
	};

	// REGISTRAR USUARIOS
	createUserController = async (
		req: Request,
		res: Response
	): Promise<Response | any> => {
		try {
			console.log(req.body, "response")
			const result = await this.userService.createUserService(req.body);
			
			result.password = "";
			return res.status(201).json({
				message: "REGISTRO EXITOSO",
				user: result,
			});
		} catch (err) {
			if (err instanceof Error) {
				return res.status(400).json({
					message: "ERROR AL CREAR USUARIO",
					error: err.message,
				});
			} else {
				return res.status(500).json({
					message: "ERROR DESCONOCIDO",
					error: "ERROR DESCONOCIDO",
				});
			}
		}
	};

	// LOGIN USUARIO
	loginController = async (
		req: Request,
		res: Response
	): Promise<Response | any> => {
		let body = {
			email: "",
			password: "",
		};

		try {
			body = req.body;
			const result = await this.userService.loginService(
				body.email,
				body.password
			);
			return res.status(200).json({
				status: "success",
				message: "Inicio de sesión exitoso",
				id: result.pk_user,
				email: result.email,
			});
		} catch (err) {
			if (err instanceof Error) {
				return res.status(401).json({
					message: "ACCESO DENEGADO",
					error: err.message,
				});
			} else {
				return res.status(500).json({
					message: "ERROR DESCONOCIDO",
					error: "ERROR DESCONOCIDO",
				});
			}
		}
	};

	// Eliminar un usuario
	//   async deleteUser(req: Request, res: Response) {
	//     const { id } = req.params;
	//     if (!id || isNaN(Number(id))) {
	//       return handlerError(res, "INVALID_USER_ID", 400);
	//     }

	//     try {
	//       const result = await this.userService.deleteUser(Number(id));
	//       if (!result) {
	//         return handlerError(res, "USER_NOT_FOUND", 404);
	//       }

	//       res.status(204).json({ message: `User with ID ${id} has been deleted.` });
	//     } catch (err) {
	//       handlerError(res, "UNKNOWN_ERROR", 500);
	//     }
	//   }
}

export default new UserController();
