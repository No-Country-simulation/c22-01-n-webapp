"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handlerError = void 0;
const errorMessages = {
    400: "Bad Request",
    401: "Unauthorized",
    403: "Forbidden",
    404: "Not Found",
    409: "Conflict",
    500: "Internal Server Error",
    502: "Bad Gateway",
    503: "Service Unavailable",
    504: "Gateway Timeout",
};
const handlerError = (res, errorCode, statusCode = 500) => {
    const message = errorMessages[statusCode] || "Error desconocido";
    res.status(statusCode).json({
        error: errorCode,
        message,
    });
};
exports.handlerError = handlerError;
//# sourceMappingURL=error.handler.js.map