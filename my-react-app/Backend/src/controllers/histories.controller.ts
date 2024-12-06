import { Request, Response } from "express";
import { HistoryService } from "@services/history.service";
import { History } from "@models/histories.model";
import { handlerError } from "@middlewares/error.handler";

class HistoryController {
  private readonly historyService: HistoryService;
  constructor() {
    this.historyService = new HistoryService();
  }

  getAllHistories = async (
    _req: Request,
    res: Response
  ): Promise<History[] | any> => {
    try {
      const histories = await this.historyService.getAllHistories();
      if (!histories || histories.length === 0) {
        return handlerError(
          res,
          "No se encuentran registros en la base de datos",
          404
        );
      }
      res.status(200).json(histories);
    } catch (err) {}
  };
}

export default new HistoryController();
