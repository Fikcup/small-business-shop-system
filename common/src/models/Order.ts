import { getModelForClass, prop, Ref } from '@typegoose/typegoose';
import mongoose from 'mongoose';
import { User } from './User';
import { Shop } from './Shop';
import { OrderStatusDto } from '../dtos/order-status.dto';

export class Order {
    @prop({ 
        required: true,
        default: new mongoose.Types.ObjectId() 
    })
    public id!: mongoose.Types.ObjectId;

    @prop({ 
        required: true,
        enum: OrderStatusDto,
        default: 'RECIEVED'
    })
    public status!: string;

    @prop({
        required: true,
        ref: () => User
    })
    public user!: Ref<User>;

    @prop({
        required: true,
        ref: () => Shop
    })
    protected shop!: Ref<Shop>;
}

export const OrderModel = getModelForClass(Order);

let document = async () => await OrderModel.create({ name: 'Order' });
document();