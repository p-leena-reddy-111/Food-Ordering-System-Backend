const express=require('express');
const mongoose=require('mongoose');

const router=express.Router();

const users=require("../models/user.js");
const Cart=require("../models/cart.js");

const addtoCart=async(req,res,next)=>
{
    const items=new Cart(req.body);
    try
    {
        const saveditems=await items.save();
        const gettinguser=await users.findById(req.params.id);   
        if(!gettinguser)
        {
            return res.status(404).json({message:"No User found"});
        }

        gettinguser.cart=saveditems._id;
        await gettinguser.save();
        return res.status(201).json(saveditems);
    }
    catch(err)
    {
        console.log(err);
        return res.send("Unable to add to cart");
    }
}

const editCart=async(req,res,next)=>   // localhost:8800/cart/:cartId
{
    const items=req.body;
    try
    {
        const updatedCart=await Cart.findByIdAndUpdate(req.params.cartId,{$set:items},{new:true});
        if(!updatedCart) 
        {
            return res.status(404).json({ message: 'Cart not found' });
        }

        const userId= updatedCart.userId.toString() ;
        const updatedUser = await users.findById(userId);
        if (!updatedUser) 
        {
            return res.status(404).json({ message: 'Restaurant not found' });
        }
        updatedUser.cart = updatedCart._id;
        await updatedUser.save();

        return res.status(200).json(updatedCart);
    }
    catch(err)
    {
        return res.send("Unable to update the cart");
    }
}

const getCart=async(req,res,next)=>
{
    try
    {
        const cart = await Cart.findById(req.params.cartId).populate( { path: 'items',populate:{path:'foodId'} } );
        return res.status(200).json(cart);
    }
    catch(err)
    {
        console.log(err);
        return res.status(400).send("Cannot get the Cart details");
    }
}


module.exports={addtoCart,editCart,getCart};