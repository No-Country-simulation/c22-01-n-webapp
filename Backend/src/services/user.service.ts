import { AppDataSource } from "@config/database.config";
import { Role } from "@models/roles.model";
import { User } from "@models/users.model";
import bcrypt from "bcryptjs";

export class UserService {
  // OBJETO PARA MANEJAR CONSULTAS EN LA BASE DE DATOS CON LA TABLA USUARIO
  private readonly repository = AppDataSource.getRepository(User);

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
  createUserService = async (dataUser: {
    name: string;
    lastname: string;
    age: number;
    email: string;
    password: string;
    dni: string;
    picture: string;
    phone: string;
    role: Role;
  }): Promise<User> => {
    try {
      //validacion inicial
      if (!dataUser.password) {
        return Promise.reject(new Error("La contraseña es requerida."));
      }

      //cifrar contraseña
      dataUser.password = await this.passwordEncrypt(dataUser.password);

      // Verificar existencia previa del usuario
      const VALID_SEARCH = await this.repository.findOne({
        where: {
          dni: dataUser.dni,
        },
      });

      if (VALID_SEARCH)
        throw new Error(
          `ALGUNOS DATOS INGRESADOS YA EXISTEN EN LA BASE DE DATOS REVISAR Y CORREGIR BUSCAR REGISTRO POR DNI: ${VALID_SEARCH.dni}`
        );

      // Guardar usuario
      return await this.repository.save(dataUser);
    } catch (error) {
      return Promise.reject(
        error instanceof Error ? error : new Error(String(error))
      );
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
      return Promise.reject(
        error instanceof Error ? error : new Error(String(error))
      );
    }
  };

  passwordEncrypt = async (pass: string): Promise<string> => {
    try {
      if (!pass || typeof pass !== "string") {
        throw new Error("La contraseña no es válida para el cifrado.");
      }

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
  passwordMatcher = async (pass: string, hash: string): Promise<boolean> => {
    // COMPARACION DE PASSWORD INGRESADA CON LA PASSWORD ENCRIPTADA EN LA BASE DE DATOS
    return await bcrypt.compare(pass, hash);
  };
}
