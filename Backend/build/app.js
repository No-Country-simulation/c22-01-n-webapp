"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_config_1 = __importDefault(require("./config/app.config"));
const database_config_1 = require("./config/database.config");
const port = process.env.PORT ?? 4000;
async function startServer() {
    try {
        await database_config_1.AppDataSource.initialize()
            .then(() => {
            console.log("Database connection established");
        })
            .catch((error) => console.error("Database connection error", error));
        app_config_1.default.listen(port, () => console.log(`Server is running at http://localhost:${port}`));
    }
    catch (err) {
        if (err instanceof Error) {
            console.error("Error starting the server:", err.message);
        }
    }
}
startServer();
//# sourceMappingURL=app.js.map