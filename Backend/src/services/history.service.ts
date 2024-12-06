import { AppDataSource } from "@config/database.config";
import { History } from "../models/histories.model";

export class HistoryService {
  private readonly repository = AppDataSource.getRepository(History);

  getAllHistories = async (): Promise<History[] | any> => {
    try {
      const history = await this.repository.findOne({
        relations: ["user", "appointment"],
        order: { registrationDate: "DESC" },
      });

      return history;
    } catch {
      throw new Error("Error al obtener la Historia Medica");
    }
  };

  createHistory = async (data: History): Promise<History> => {
    try {
      const newHistory = this.repository.create({
        user: { pk_user: data.user.pk_user },
        description: data.description,
        recipe: data.recipe,
      });

      return await this.repository.save(newHistory);
    } catch {
      throw new Error("Error al crear la Histora Medica");
    }
  };
}
