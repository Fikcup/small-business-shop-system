import { getModelForClass, prop, Ref } from '@typegoose/typegoose';
import mongoose from 'mongoose';
import { Shop } from './Shop';

export class Product {
    @prop({ 
        required: true,
        default: new mongoose.Types.ObjectId() 
    })
    public id!: mongoose.Types.ObjectId;

    @prop({
        required: true
    })
    public name!: string;

    @prop()
    public description?: string;

    @prop({ 
        required: true, 
        default: 'https://imgur.com/pvsvGHc'
    })
    public img!: URL;

    @prop({
        required: true
    })
    public price!: number;

    @prop({
        required: true
    })
    public quantity!: number;

    @prop({
        ref: 'Shop'
    })
    public shop!: Ref<Shop>;
}

export const ProductModel = getModelForClass(Product);

let document = async () => await ProductModel.create({ name: 'Product' });
document();