// error.handler.ts
import { Response } from "express";

// Objeto que mapea códigos de estado HTTP a mensajes de error
const errorMessages: Record<number, string> = {
  400: "Bad Request",
  401: "Unauthorized",
  403: "Forbidden",
  404: "Not Found",
  500: "Internal Server Error",
  502: "Bad Gateway",
  503: "Service Unavailable",
  504: "Gateway Timeout",
};

// Manejador de errores
const handlerError = (res: Response, errorCode: string, statusCode = 500) => {
  const message = errorMessages[statusCode] || "Error desconocido";
  res.status(statusCode).json({
    error: errorCode,
    message,
  });
};

export { handlerError };
