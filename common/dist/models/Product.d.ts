import { Ref } from '@typegoose/typegoose';
import mongoose from 'mongoose';
import { Shop } from './Shop';
export declare class Product {
    id: mongoose.Types.ObjectId;
    name: string;
    description?: string;
    img: URL;
    price: number;
    quantity: number;
    shop: Ref<Shop>;
}
export declare const ProductModel: import("@typegoose/typegoose").ReturnModelType<typeof Product, import("@typegoose/typegoose/lib/types").BeAnObject>;
