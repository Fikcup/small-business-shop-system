"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderStatusDto = void 0;
var OrderStatusDto;
(function (OrderStatusDto) {
    OrderStatusDto[OrderStatusDto["RECIEVED"] = 0] = "RECIEVED";
    OrderStatusDto[OrderStatusDto["PROCESSING"] = 1] = "PROCESSING";
    OrderStatusDto[OrderStatusDto["SHIPPED"] = 2] = "SHIPPED";
    OrderStatusDto[OrderStatusDto["COMPLETED"] = 3] = "COMPLETED";
})(OrderStatusDto = exports.OrderStatusDto || (exports.OrderStatusDto = {}));
