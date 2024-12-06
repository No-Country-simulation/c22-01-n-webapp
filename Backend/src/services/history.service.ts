import { AppDataSource } from "@config/database.config";
import { History } from "../models/histories.model";

export class HistoryService {
  private readonly repository = AppDataSource.getRepository(History);

  getAllHistories = async (): Promise<History[] | any> => {
    return await this.repository.find({ relations: ["user"] });
  };

  getHistoryById = async (id: number): Promise<History | any> => {
    return await this.repository.findOne({
      where: { pk_history: id },
      relations: ["user"],
    });
  };

  createHistory = async (data: History): Promise<History> => {
    try {
      const newHistory = this.repository.create({
        user: { pk_user: data.user.pk_user },
        description: data.description,
        recipe: data.recipe,
      });

      return await this.repository.save(newHistory);
    } catch (err) {
      throw new Error("Error al crear la Historia Medica");
    }
  };
}
