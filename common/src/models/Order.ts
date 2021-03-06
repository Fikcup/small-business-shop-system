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
        default: OrderStatusDto.RECIEVED
    })
    public status!: OrderStatusDto;

    @prop({
        required: true,
        ref: () => User
    })
    public customer!: Ref<User>;

    @prop({
        required: true,
        ref: () => Shop
    })
    protected shop!: Ref<Shop>;
}

export const OrderModel = getModelForClass(Order);