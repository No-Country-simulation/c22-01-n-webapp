import { AppDataSource } from "@config/database.config";
import { Role } from "@models/roles.model";
import { User } from "@models/users.model";

export class UserService {
  getAllUsers = async (): Promise<User[]> => {
    const userRepository = AppDataSource.getRepository(User);
    const users = await userRepository.find({});
    return users;
  };

  getUserById = async (userId: number): Promise<User | null> => {
    const userRepository = AppDataSource.getRepository(User);
    const user = await userRepository.findOneBy({ userId });
    return user;
  };

  createUser = async (
    userName: string,
    email: string,
    password: string,
    role: Role
  ): Promise<User> => {
    const roleRepository = AppDataSource.getRepository(Role);
    const roleFound = await roleRepository.findOneBy({ roleId: role.roleId });
    if (!roleFound) {
      throw new Error("Role not found");
    }

    const userRepository = AppDataSource.getRepository(User);
    const user = userRepository.create({
      userName,
      email,
      password,
      role,
    });

    const createdUser = await userRepository.save(user);
    return createdUser;
  };

  deleteUser = async (userId: number): Promise<boolean> => {
    const userRepository = AppDataSource.getRepository(User);
    const user = await userRepository.findOneBy({ userId });
    if (!user) {
      return false;
    }

    await userRepository.delete({ userId });
    return true;
  };
}
