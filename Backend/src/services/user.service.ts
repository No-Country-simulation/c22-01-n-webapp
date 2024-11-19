import { IUserService, IUserRepository, User } from "types/user.types";

export class UserService implements IUserService {
  private readonly userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  async createUser(user: User): Promise<User> {
    return this.userRepository.create(user);
  }

  /*async getUserById(id: number): Promise<User | null> {
    return this.userRepository.findById(id);
  }*/

  async updateUser(user: User): Promise<User | null> {
    return this.userRepository.update(user.id.toString(), user);
  }

  async deleteUser(id: number): Promise<void> {
    await this.userRepository.delete(id.toString());
  }

  async getAllUsers(): Promise<User[]> {
    return this.userRepository.findAll();
  }
}
