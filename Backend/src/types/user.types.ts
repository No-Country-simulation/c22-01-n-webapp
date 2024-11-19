import { Repository } from "./repository.types";

export interface User {
  id: number;
  name: string;
  email: string;
  usernames: string;
}

export interface IUserRepository extends Repository<User> {}

export interface IUserService {
  createUser(user: User): Promise<User>;
  //getUserById(id: number): Promise<User | null>;
  updateUser(user: User): Promise<User | null>;
  deleteUser(id: number): Promise<void>;
  getAllUsers(): Promise<User[]>;
}
