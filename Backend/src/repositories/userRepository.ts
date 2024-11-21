import { Users } from "@models/userModel";
import { IUserRepository } from "types/user.types";

export class UserRepository implements IUserRepository {
  private users: Users[] = [];

  async create(user: Users): Promise<Users> {
    this.users.push(user);
    return user;
  }

  async findAll(): Promise<Users[]> {
    return this.users;
  }

  async findById(id: number): Promise<Users | null> {
    return this.users.find((user) => user.id === id) || null;
  }

  async update(id: number, user: Partial<Users>): Promise<Users | null> {
    const index = this.users.findIndex((u) => u.id === id);
    if (index !== -1) {
      this.users[index] = { ...this.users[index], ...user };
      return this.users[index];
    }
    return null;
  }

  async delete(id: number): Promise<boolean> {
    const index = this.users.findIndex((u) => u.id === id);
    if (index !== -1) {
      this.users.splice(index, 1);
      return true;
    }
    return false;
  }
}
