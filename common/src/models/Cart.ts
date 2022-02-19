import { getModelForClass, prop, Ref } from '@typegoose/typegoose';
import mongoose from 'mongoose';
import { User } from './User';

export class Cart {
    @prop({ 
        required: true,
        default: new mongoose.Types.ObjectId() 
    })
    public id!: mongoose.Types.ObjectId;

    @prop({
        required: true,
        ref: () => User
    })
    public user!: Ref<User>;
}

export const CartModel = getModelForClass(Cart);