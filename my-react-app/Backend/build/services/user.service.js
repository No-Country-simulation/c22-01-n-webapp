"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const database_config_1 = require("@config/database.config");
const roles_model_1 = require("@models/roles.model");
const users_model_1 = require("@models/users.model");
class UserService {
    constructor() {
        this.getAllUsers = async () => {
            const userRepository = database_config_1.AppDataSource.getRepository(users_model_1.User);
            const users = await userRepository.find({});
            return users;
        };
        this.getUserById = async (userId) => {
            const userRepository = database_config_1.AppDataSource.getRepository(users_model_1.User);
            const user = await userRepository.findOneBy({ userId });
            return user;
        };
        this.createUser = async (userName, email, password, role) => {
            const roleRepository = database_config_1.AppDataSource.getRepository(roles_model_1.Role);
            const roleFound = await roleRepository.findOneBy({ roleId: role.roleId });
            if (!roleFound) {
                throw new Error("Role not found");
            }
            const userRepository = database_config_1.AppDataSource.getRepository(users_model_1.User);
            const user = userRepository.create({
                userName,
                email,
                password,
                role,
            });
            const createdUser = await userRepository.save(user);
            return createdUser;
        };
        this.deleteUser = async (userId) => {
            const userRepository = database_config_1.AppDataSource.getRepository(users_model_1.User);
            const user = await userRepository.findOneBy({ userId });
            if (!user) {
                return false;
            }
            await userRepository.delete({ userId });
            return true;
        };
    }
}
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map