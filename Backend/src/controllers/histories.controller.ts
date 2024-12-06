import { Request, Response } from "express";
import { HistoryService } from "@services/history.service";
import { History } from "@models/histories.model";
import { handlerError } from "@middlewares/error.handler";

class HistoryController {
  private readonly historyService: HistoryService;
  constructor() {
    this.historyService = new HistoryService();
  }

  //Obtener todas las Historias Medicas
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

  //Obtener una Historia Medica por ID
  getHistoryById = async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params["id"]);
      const history = await this.historyService.getHistoryById(id);
      if (!history) {
        return handlerError(res, "Historia no encontrada", 404);
      }
      res.status(200).json({
        message: "Información del Historia Medica",
        history,
      });
    } catch (err) {
      if (err instanceof Error) {
        handlerError(
          res,
          "Error al obtener el Historia Medica del Paciente",
          500
        );
      }
    }
  };

  //Crear la Historia Medica
  createHistory = async (req: Request, res: Response) => {
    try {
      const newHistory = await this.historyService.createHistory(req.body);
      res.status(201).json({
        message: "Historia Medica creada exitosamente",
        history: newHistory,
      });
    } catch (err) {
      handlerError(res, "Error al crear la Historia Medica", 500);
    }
  };
}

export default new HistoryController();
