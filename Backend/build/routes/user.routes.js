"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const user_controller_1 = __importDefault(require("@controllers/user.controller"));
const router = (0, express_1.Router)();
exports.router = router;
router.get("/", user_controller_1.default.getAllUsers);
router.get("/:id", user_controller_1.default.getUserById);
router.post("/", user_controller_1.default.createUser);
router.delete("/:id", user_controller_1.default.deleteUser);
//# sourceMappingURL=user.routes.js.map