import { Ref } from '@typegoose/typegoose';
import mongoose from 'mongoose';
import { User } from './User';
import { Shop } from './Shop';
export declare class Order {
    id: mongoose.Types.ObjectId;
    status: string;
    user: Ref<User>;
    protected shop: Ref<Shop>;
}
export declare const OrderModel: import("@typegoose/typegoose").ReturnModelType<typeof Order, import("@typegoose/typegoose/lib/types").BeAnObject>;
