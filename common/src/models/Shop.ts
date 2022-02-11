import { getModelForClass, prop, Ref } from '@typegoose/typegoose';
import mongoose from 'mongoose';
import { User } from './User';

export class Shop {
    @prop({ 
        required: true,
        default: new mongoose.Types.ObjectId() 
    })
    public id!: mongoose.Types.ObjectId;

    @prop({ 
        required: true, 
        default: true
    })
    public active!: boolean;

    @prop({
        required: true
    })
    public name!: string;

    @prop()
    public description?: string;

    @prop({ 
        required: true, 
        default: 'https://imgur.com/0RpFv3U'
    })
    public img!: URL;

    @prop({
        ref: () => User
    })
    public user!: Ref<User>;
}

export const ShopModel = getModelForClass(Shop);

let document = async () => await ShopModel.create({ name: 'Shop' });
document();