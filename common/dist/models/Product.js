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
exports.ProductModel = exports.Product = void 0;
const typegoose_1 = require("@typegoose/typegoose");
const mongoose_1 = __importDefault(require("mongoose"));
const Shop_1 = require("./Shop");
class Product {
}
__decorate([
    (0, typegoose_1.prop)({
        required: true,
        default: new mongoose_1.default.Types.ObjectId()
    }),
    __metadata("design:type", mongoose_1.default.Types.ObjectId)
], Product.prototype, "id", void 0);
__decorate([
    (0, typegoose_1.prop)({
        required: true
    }),
    __metadata("design:type", String)
], Product.prototype, "name", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], Product.prototype, "description", void 0);
__decorate([
    (0, typegoose_1.prop)({
        required: true,
        default: 'https://imgur.com/pvsvGHc'
    }),
    __metadata("design:type", URL)
], Product.prototype, "img", void 0);
__decorate([
    (0, typegoose_1.prop)({
        required: true
    }),
    __metadata("design:type", Number)
], Product.prototype, "price", void 0);
__decorate([
    (0, typegoose_1.prop)({
        required: true
    }),
    __metadata("design:type", Number)
], Product.prototype, "quantity", void 0);
__decorate([
    (0, typegoose_1.prop)({
        ref: () => Shop_1.Shop
    }),
    __metadata("design:type", Object)
], Product.prototype, "shop", void 0);
exports.Product = Product;
exports.ProductModel = (0, typegoose_1.getModelForClass)(Product);
