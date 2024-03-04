const express=require('express');
const mongoose=require('mongoose');
const Order=require('../models/order.js');
const users=require("../models/user.js");

const placeOrder = async(req,res,next) => {
    const order=new Order(req.body);
    try 
    {
        const savedorder = await order.save();
        const user=await users.findById(savedorder.userid);
        if(!user)
        {
            return res.status(404).json({message:"No User Found"});
        } 
        user.order=savedorder._id;
        await user.save();
        res.status(200).json(savedorder);
    } 
    catch (error) 
    {
      res.status(500).json({ message: "something went wrong" });
    }
};

const getOrder=async(req,res,next)=>
{
  try
  {
      const order = await Order.findById(req.params.orderId).populate({ path: 'cart', populate:{path:'items',populate:{path:'foodId'}} });
      return res.status(200).json(order);
  }
  catch(err)
  {
      console.log(err);
      return res.status(400).send("Cannot get the Order");
  }
}

const updateOrder=async (req,res,next)=>{
  try
  {
      const updatedOrder=await Order.findByIdAndUpdate(req.params.orderId,{$set:req.body},{new:true});
      const user=await users.findById(updatedOrder.userid);
      if(!user)
      {
            return res.status(404).json({message:"No User Found"});
      } 
      user.order=updateOrder._id;
      await user.save();
      return res.status(200).json(updatedOrder);
  }
  catch(err)
  {
      return res.status(400).send("Unable to update the Order");
  }
}

const cancelOrder=async(req,res,next)=>
{
    try
    {
        const order=await Order.findById(req.params.orderId);
        await Order.findByIdAndDelete(req.params.orderId);
        const user=await users.findById(order.userid);
        if(!user)
        {
                return res.status(404).json({message:"No User Found"});
        } 
        user.order=null;
        await user.save();

        res.status(200).json({message:"Successfully Canceled the order"});
    }
    catch(err)
    {
        return res.status(400).send("Unable to cancel the order");
    }
}

module.exports={placeOrder,getOrder,updateOrder,cancelOrder};