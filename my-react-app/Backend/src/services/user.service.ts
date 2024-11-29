import { AppDataSource } from "@config/database.config";
import { User } from "@models/users.model";
import bcrypt from "bcryptjs";

export class UserService {
	// OBJETO PARA MANEJAR CONSULTAS EN LA BASE DE DATOS CON LA TABLA USUARIO
	private repository = AppDataSource.getRepository(User);

	// LISTA DE USUARIOS
	getAllUsersService = async (): Promise<User[]> => {
		return await this.repository.find();
	};

	// BUSCAR USUARIO POR ID
	getUserById = async (id: number): Promise<User | null> => {
		const user = await this.repository.findOneBy({ pk_user: id });

		if (!user) return null;

		return Promise.resolve(user);
	};

	// REGISTRAR USUARIO
	createUserService = async (dataUser: User): Promise<User> => {
		dataUser.password = await this.passwordEncrypt(dataUser.password);
		try {
			const VALID_SEARCH = await this.repository.findOne({
				where: {
					dni: dataUser.dni,
				},
			});

			if (VALID_SEARCH)
				throw new Error(
					`ALGUNOS DATOS INGRESADOS YA EXISTEN EN LA BASE DE DATOS REVISAR Y CORREGIR BUSCAR REGISTRO POR DNI: ${VALID_SEARCH.dni}`
				);
			return await this.repository.save(dataUser);
		} catch (error) {
			return Promise.reject(error);
		}
	};

	// INICIAR SESION
	loginService = async (email: string, password: string): Promise<User> => {
		try {
			const user = await this.repository.findOne({ where: { email: email } });
			if (!user) {
				throw new Error("EL CORREO NO SE ENCUENTRA REGISTRADO");
			}
			if (await this.passwordMatcher(password, user.password)) {
				user.password = "";
				return user;
			} else {
				throw new Error("CONTRASEÑA INCORRECTA");
			}
		} catch (error) {
			return Promise.reject(error);
		}
	};

	// deleteUser = async (userId: number): Promise<boolean> => {
	// 	const userRepository = AppDataSource.getRepository(User);
	// 	const user = await userRepository.findOneBy({ userId });
	// 	if (!user) {
	// 		return false;
	// 	}

	// 	await userRepository.delete({ userId });
	// 	return true;
	// };

	passwordEncrypt = async (pass: string): Promise<string> => {
		try {
			// RONDAS DE CIFRADO
			const salt = await bcrypt.genSalt(10);
			// GENERAMOS HASH DE CONTRASEÑA
			const hash = await bcrypt.hash(pass, salt);

			return hash;
		} catch (error) {
			if (error instanceof Error) {
				console.log(`ERROR AL CIFRAR CONSTRASEÑA: ${error.message}`);
			}

			return "";
		}
	};
  passwordMatcher = async (pass: string, hash: string): Promise<Boolean> => {
    // COMPARACION DE PASSWORD INGRESADA CON LA PASSWORD ENCRIPTADA EN LA BASE DE DATOS
		return await bcrypt.compare(pass, hash);
	};
}
