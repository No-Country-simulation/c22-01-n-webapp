import { Users } from "@models/userModel";
import { IUserService, IUserRepository } from "types/user.types";

export class UserService implements IUserService {
  private userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  async createUser(user: Users): Promise<Users> {
    return this.userRepository.create(user);
  }

  async getAllUsers(): Promise<Users[]> {
    return this.userRepository.findAll();
  }

  async getUserById(id: number): Promise<Users | null> {
    return this.userRepository.findById(id);
  }

  async updateUser(id: number, user: Partial<Users>): Promise<Users | null> {
    return this.userRepository.update(id, user);
  }

  async deleteUser(id: number): Promise<boolean> {
    return this.userRepository.delete(id);
  }
}
