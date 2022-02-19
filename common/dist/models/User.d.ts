import mongoose from 'mongoose';
import { Ref } from '@typegoose/typegoose';
import { Address } from './Address';
export declare class User {
    id: mongoose.Types.ObjectId;
    img: URL;
    username: string;
    email: string;
    password: string;
    addressArr?: Ref<Address>[];
}
export declare const UserModel: import("@typegoose/typegoose").ReturnModelType<typeof User, import("@typegoose/typegoose/lib/types").BeAnObject>;
