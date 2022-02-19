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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderModel = exports.Order = void 0;
const typegoose_1 = require("@typegoose/typegoose");
const mongoose_1 = __importDefault(require("mongoose"));
const User_1 = require("./User");
const Shop_1 = require("./Shop");
const order_status_dto_1 = require("../dtos/order-status.dto");
class Order {
}
__decorate([
    (0, typegoose_1.prop)({
        required: true,
        default: new mongoose_1.default.Types.ObjectId()
    }),
    __metadata("design:type", mongoose_1.default.Types.ObjectId)
], Order.prototype, "id", void 0);
__decorate([
    (0, typegoose_1.prop)({
        required: true,
        enum: order_status_dto_1.OrderStatusDto,
        default: order_status_dto_1.OrderStatusDto.RECIEVED
    }),
    __metadata("design:type", String)
], Order.prototype, "status", void 0);
__decorate([
    (0, typegoose_1.prop)({
        required: true,
        ref: () => User_1.User
    }),
    __metadata("design:type", Object)
], Order.prototype, "user", void 0);
__decorate([
    (0, typegoose_1.prop)({
        required: true,
        ref: () => Shop_1.Shop
    }),
    __metadata("design:type", Object)
], Order.prototype, "shop", void 0);
exports.Order = Order;
exports.OrderModel = (0, typegoose_1.getModelForClass)(Order);
let document = () => __awaiter(void 0, void 0, void 0, function* () { return yield exports.OrderModel.create({ name: 'Order' }); });
document();
