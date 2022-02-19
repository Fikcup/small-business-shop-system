import mongoose from 'mongoose';
export declare class Address {
    id: mongoose.Types.ObjectId;
    name: string;
    street: string;
    apt?: string;
    city: string;
    state: string;
    zip: string;
}
export declare const AddressModel: import("@typegoose/typegoose").ReturnModelType<typeof Address, import("@typegoose/typegoose/lib/types").BeAnObject>;
