import { Ref } from '@typegoose/typegoose';
import mongoose from 'mongoose';
import { User } from './User';
export declare class Cart {
    id: mongoose.Types.ObjectId;
    user: Ref<User>;
}
export declare const CartModel: import("@typegoose/typegoose").ReturnModelType<typeof Cart, import("@typegoose/typegoose/lib/types").BeAnObject>;
