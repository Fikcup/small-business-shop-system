import { getModelForClass, prop } from '@typegoose/typegoose';
import mongoose from 'mongoose';

export class Address {
    @prop({ 
        required: true,
        default: new mongoose.Types.ObjectId() 
    })
    public id!: mongoose.Types.ObjectId;

    @prop({
        required: true
    })
    protected name!: string;

    @prop({
        required: true
    })
    protected street!: string;

    @prop()
    protected apt?: string;

    @prop({
        required: true
    })
    protected city!: string;

    @prop({
        required: true
    })
    protected state!: string;

    @prop({
        required: true
    })
    protected zip!: string;
}

export const AddressModel = getModelForClass(Address);

let document = async () => await AddressModel.create({ name: 'Address' });
document();