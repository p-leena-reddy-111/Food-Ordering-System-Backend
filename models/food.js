const express=require("express");
const mongoose=require("mongoose");

const Schema=mongoose.Schema;

const FoodSchema=new Schema({
    name:
    {
        type:String,
        required:true
    },
    category:
    {
        type:String,
        required:true,
        enum: ["veg","non-veg"],
        default:"veg",
    },
    description:
    {
        type:String,
    },
    price:
    {
        type:Number,
        required:true
    }

})
module.exports=mongoose.model('food',FoodSchema);