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
exports.UserModel = exports.User = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const typegoose_1 = require("@typegoose/typegoose");
const bcrypt_1 = __importDefault(require("bcrypt"));
const Address_1 = require("./Address");
let User = class User {
};
__decorate([
    (0, typegoose_1.prop)({
        required: true,
        default: new mongoose_1.default.Types.ObjectId()
    }),
    __metadata("design:type", mongoose_1.default.Types.ObjectId)
], User.prototype, "id", void 0);
__decorate([
    (0, typegoose_1.prop)({
        required: true,
        default: 'https://imgur.com/0RpFv3U'
    }),
    __metadata("design:type", URL)
], User.prototype, "img", void 0);
__decorate([
    (0, typegoose_1.prop)({
        required: true,
        unique: true
    }),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    (0, typegoose_1.prop)({
        required: true,
        unique: true
    }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typegoose_1.prop)({
        required: true
    }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, typegoose_1.prop)({
        ref: () => Address_1.Address
    }),
    __metadata("design:type", Array)
], User.prototype, "addressArr", void 0);
User = __decorate([
    (0, typegoose_1.pre)('save', function (next) {
        if (this.isModified('password') || this.isNew) {
            let pwd = this.password;
            this.password = bcrypt_1.default.hashSync(pwd, 10);
        }
        if (this.isModified('password') || this.isNew) {
            let user = this.username;
            this.username = user.toLowerCase();
        }
        next();
    })
], User);
exports.User = User;
exports.UserModel = (0, typegoose_1.getModelForClass)(User);
