"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const error_handler_1 = require("@middlewares/error.handler");
const user_service_1 = require("@services/user.service");
class UserController {
    constructor() {
        this.createUser = async (req, res) => {
            try {
                const { userName, email, password, role } = req.body;
                const user = this.userService.createUser(userName, email, password, role);
                res.status(201).json(user);
            }
            catch (err) {
                if (err instanceof Error) {
                    (0, error_handler_1.handlerError)(res, "ERROR_CREATE_USER", 400);
                }
                else {
                    (0, error_handler_1.handlerError)(res, "UNKNOWN_ERROR", 500);
                }
            }
        };
        this.userService = new user_service_1.UserService();
    }
    async getAllUsers(_req, res) {
        try {
            const users = await this.userService.getAllUsers();
            res.status(200).json(users);
        }
        catch (err) {
            if (err instanceof Error) {
                (0, error_handler_1.handlerError)(res, "ERROR_GET_USERS", 404);
            }
            else {
                (0, error_handler_1.handlerError)(res, "UNKNOWN_ERROR", 500);
            }
        }
    }
    async getUserById(req, res) {
        const { id } = req.params;
        if (!id || isNaN(Number(id))) {
            (0, error_handler_1.handlerError)(res, "INVALID_USER_ID", 400);
            return;
        }
        try {
            const user = await this.userService.getUserById(Number(id));
            if (!user) {
                (0, error_handler_1.handlerError)(res, "USER_NOT_FOUND", 404);
                return;
            }
            res.status(200).json(user);
        }
        catch (err) {
            if (err instanceof Error) {
                (0, error_handler_1.handlerError)(res, "ERROR_GET_USER", 404);
            }
        }
    }
    async deleteUser(req, res) {
        const { id } = req.params;
        if (!id || isNaN(Number(id))) {
            return (0, error_handler_1.handlerError)(res, "INVALID_USER_ID", 400);
        }
        try {
            const result = await this.userService.deleteUser(Number(id));
            if (!result) {
                return (0, error_handler_1.handlerError)(res, "USER_NOT_FOUND", 404);
            }
            res.status(204).json({ message: `User with ID ${id} has been deleted.` });
        }
        catch (err) {
            (0, error_handler_1.handlerError)(res, "UNKNOWN_ERROR", 500);
        }
    }
}
exports.default = new UserController();
//# sourceMappingURL=user.controller.js.map