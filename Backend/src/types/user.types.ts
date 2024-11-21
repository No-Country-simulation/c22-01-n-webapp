import { Users } from "@models/userModel";
import { Repository } from "./repository.types";

export interface IUserRepository extends Repository<Users> {}

export interface IUserService {
  createUser(user: Users): Promise<Users>;
  getAllUsers(): Promise<Users[]>;
  getUserById(id: number): Promise<Users | null>;
  updateUser(id: number, user: Partial<Users>): Promise<Users | null>;
  deleteUser(id: number): Promise<boolean>;
}
