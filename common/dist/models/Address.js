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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressModel = exports.Address = void 0;
const typegoose_1 = require("@typegoose/typegoose");
const mongoose_1 = __importDefault(require("mongoose"));
class Address {
}
__decorate([
    (0, typegoose_1.prop)({
        required: true,
        default: new mongoose_1.default.Types.ObjectId()
    }),
    __metadata("design:type", mongoose_1.default.Types.ObjectId)
], Address.prototype, "id", void 0);
__decorate([
    (0, typegoose_1.prop)({
        required: true
    }),
    __metadata("design:type", String)
], Address.prototype, "name", void 0);
__decorate([
    (0, typegoose_1.prop)({
        required: true
    }),
    __metadata("design:type", String)
], Address.prototype, "street", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], Address.prototype, "apt", void 0);
__decorate([
    (0, typegoose_1.prop)({
        required: true
    }),
    __metadata("design:type", String)
], Address.prototype, "city", void 0);
__decorate([
    (0, typegoose_1.prop)({
        required: true
    }),
    __metadata("design:type", String)
], Address.prototype, "state", void 0);
__decorate([
    (0, typegoose_1.prop)({
        required: true
    }),
    __metadata("design:type", String)
], Address.prototype, "zip", void 0);
exports.Address = Address;
exports.AddressModel = (0, typegoose_1.getModelForClass)(Address);
