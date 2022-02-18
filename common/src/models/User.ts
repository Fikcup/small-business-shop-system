import mongoose from 'mongoose';
import { getModelForClass, prop, pre, Ref } from '@typegoose/typegoose';
import bcrypt from 'bcrypt';

import { Address } from './Address';

@pre<User>('save', function(next) {
    if (this.isModified('password') || this.isNew) {
        let pwd = this.password;
        this.password = bcrypt.hashSync(pwd, 10);
    }

    if (this.isModified('password') || this.isNew) {
        let user = this.username;
        this.username = user.toLowerCase();
    }

    next();
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