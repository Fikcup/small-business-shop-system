import { Ref } from '@typegoose/typegoose';
import mongoose from 'mongoose';
import { User } from './User';
export declare class Shop {
    id: mongoose.Types.ObjectId;
    active: boolean;
    name: string;
    description?: string;
    img: URL;
    user: Ref<User>;
}
export declare const ShopModel: import("@typegoose/typegoose").ReturnModelType<typeof Shop, import("@typegoose/typegoose/lib/types").BeAnObject>;
