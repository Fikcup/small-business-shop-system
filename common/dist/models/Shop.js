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
exports.ShopModel = exports.Shop = void 0;
const typegoose_1 = require("@typegoose/typegoose");
const mongoose_1 = __importDefault(require("mongoose"));
class Shop {
}
__decorate([
    (0, typegoose_1.prop)({
        required: true,
        default: new mongoose_1.default.Types.ObjectId()
    }),
    __metadata("design:type", mongoose_1.default.Types.ObjectId)
], Shop.prototype, "id", void 0);
__decorate([
    (0, typegoose_1.prop)({
        required: true,
        default: true
    }),
    __metadata("design:type", Boolean)
], Shop.prototype, "active", void 0);
__decorate([
    (0, typegoose_1.prop)({
        required: true
    }),
    __metadata("design:type", String)
], Shop.prototype, "name", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], Shop.prototype, "description", void 0);
__decorate([
    (0, typegoose_1.prop)({
        required: true,
        default: 'https://imgur.com/0RpFv3U'
    }),
    __metadata("design:type", URL)
], Shop.prototype, "img", void 0);
__decorate([
    (0, typegoose_1.prop)({
        ref: 'User'
    }),
    __metadata("design:type", Object)
], Shop.prototype, "user", void 0);
exports.Shop = Shop;
exports.ShopModel = (0, typegoose_1.getModelForClass)(Shop);
let document = () => __awaiter(void 0, void 0, void 0, function* () { return yield exports.ShopModel.create({ name: 'Shop' }); });
document();
