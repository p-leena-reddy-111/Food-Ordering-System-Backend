const express=require("express");
const mongoose=require("mongoose")

const Schema=mongoose.Schema;
const OrderSchema=new Schema({
    userid:
    {
        type:mongoose.Types.ObjectId,
        required:true,
        ref:"users"
    },
    cart: {
        type:mongoose.Types.ObjectId,
        required:true,
        ref:"Cart"
    },
    total_amount: 
    {
        type: Number,
        //required: true,
    },
    restaurant_id:
    {
        type:mongoose.Types.ObjectId,
        ref:"restaurant"
    },
    date:
    {
        type:Date,
        default:Date.now()
    },
    shippingAddress: 
    {
        type: String, 
    },
    paymentMethod: 
    {
        type: String,
    },
    paidThrough: 
    {
        type: String,
    },
    paymentResponse: 
    {
        type: String,
    },
    orderStatus:
    {
        // waiting // preparing // onway // delivered // cancelled // failed
        type: String,
        enum: ['waiting', 'preparing', 'onway', 'delivered', 'canceled','failed'],
        default:'waiting'
    }
})
module.exports=mongoose.model('Order',OrderSchema);