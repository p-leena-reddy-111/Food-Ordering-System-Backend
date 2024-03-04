const express=require("express");
const mongoose=require("mongoose")

const Schema=mongoose.Schema;

const RestaurantSchema=new Schema({
    name:
    {
        type:String,
        unique:true,
        required:true
    },
    description:
    {
        type:String
    },
    street_address:
    {
        type:String,
        required:true
    },
    city:
    {
        type:String,
        required:true
    },
    state:
    {
        type:String,
        required:true
    },
    pincode:
    {
        type:String
    },
    phone:
    {
        type:String
    },
    rating:
    {
        type:Number
    },
    images:
    {
        type:Buffer
    },
    menu:
    {
        type:Schema.Types.ObjectId,
        ref:"Menu"
    }
})
module.exports=mongoose.model('restaurant',RestaurantSchema);