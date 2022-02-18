import { getModelForClass, prop, pre, Ref } from '@typegoose/typegoose';
import mongoose from 'mongoose';
import { Address } from './Address';

@pre<User>('save', function() {
    // TODO: use bcrypt to encrypt password
})
export class User {
    @prop({ 
        required: true,
        default: new mongoose.Types.ObjectId() 
    })
    public id!: mongoose.Types.ObjectId;

    @prop({ 
        required: true, 
        default: 'https://imgur.com/0RpFv3U'
    })
    public img!: URL;

    @prop({
        required: true,
        unique: true
    })
    public username!: string;

    @prop({
        required: true,
        unique: true
    })
    public email!: string;

    @prop({
        required: true
    })
    protected password!: string;

    @prop({
        ref: () => Address
    })
    protected addressArr?: Ref<Address>[];
}

export const UserModel = getModelForClass(User);

let document = async () => await UserModel.create({ name: 'User' });
document();