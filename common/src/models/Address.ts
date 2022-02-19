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
    public name!: string;

    @prop({
        required: true
    })
    public street!: string;

    @prop()
    public apt?: string;

    @prop({
        required: true
    })
    public city!: string;

    @prop({
        required: true
    })
    public state!: string;

    @prop({
        required: true
    })
    public zip!: string;
}

export const AddressModel = getModelForClass(Address);

let document = async () => await AddressModel.create({ name: 'Address' });
document();