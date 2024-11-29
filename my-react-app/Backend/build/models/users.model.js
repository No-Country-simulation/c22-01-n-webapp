"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const typeorm_1 = require("typeorm");
const roles_model_1 = require("./roles.model");
const doctors_model_1 = require("./doctors.model");
const patients_model_1 = require("./patients.model");
const admins_model_1 = require("./admins.model");
let User = class User extends typeorm_1.BaseEntity {
};
exports.User = User;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], User.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50 }),
    __metadata("design:type", String)
], User.prototype, "userName", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true, length: 255 }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255 }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => roles_model_1.Role, (role) => role.users),
    (0, typeorm_1.JoinColumn)({ name: "roleId" }),
    __metadata("design:type", roles_model_1.Role)
], User.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => doctors_model_1.Doctor, (doctor) => doctor.user),
    __metadata("design:type", doctors_model_1.Doctor)
], User.prototype, "doctor", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => patients_model_1.Patient, (patient) => patient.user),
    __metadata("design:type", patients_model_1.Patient)
], User.prototype, "patient", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => admins_model_1.Admin, (admin) => admin.user),
    __metadata("design:type", admins_model_1.Admin)
], User.prototype, "admin", void 0);
exports.User = User = __decorate([
    (0, typeorm_1.Entity)("users")
], User);
//# sourceMappingURL=users.model.js.map