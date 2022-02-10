import { getModelForClass, prop, pre } from '@typegoose/typegoose';
import mongoose from 'mongoose';

@pre<UserModel>('save', function() {
    // TODO: use bcrypt to encrypt password
})
class UserModel {
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
    public email!: string;

    @prop({
        required: true
    })
    protected password!: string;

    @prop()
    protected addressId?: mongoose.Types.ObjectId;
}

const User = getModelForClass(UserModel);

let document = async () => await User.create({ name: 'User' });
document();

module.exports = User;