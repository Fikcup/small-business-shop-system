import { Ref } from '@typegoose/typegoose';
import mongoose from 'mongoose';
import { User } from './User';
import { Shop } from './Shop';
import { OrderStatusDto } from '../dtos/order-status.dto';
export declare class Order {
    id: mongoose.Types.ObjectId;
    status: OrderStatusDto;
    customer: Ref<User>;
    protected shop: Ref<Shop>;
}
export declare const OrderModel: import("@typegoose/typegoose").ReturnModelType<typeof Order, import("@typegoose/typegoose/lib/types").BeAnObject>;
