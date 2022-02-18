import mongoose from 'mongoose';
export declare class Address {
    id: mongoose.Types.ObjectId;
    protected name: string;
    protected street: string;
    protected apt?: string;
    protected city: string;
    protected state: string;
    protected zip: string;
}
export declare const AddressModel: import("@typegoose/typegoose").ReturnModelType<typeof Address, import("@typegoose/typegoose/lib/types").BeAnObject>;
