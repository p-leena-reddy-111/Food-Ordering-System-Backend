const express=require("express");
const mongoose=require('mongoose');
const jwt=require('jsonwebtoken');
const users=require("../models/user.js");
const Cart=require("../models/cart.js");
const bcrypt=require('bcrypt');

const register=async(req,res,next)=>{
    try
    {
        const existingUser=await users.findOne({email: req.body.email});
        if(existingUser){
            return res.status(400).json({message:"Email already exists"});
        }

        const salt = bcrypt.genSaltSync(10);
        const hashedPassword=bcrypt.hashSync(req.body.password,salt);

        const newUser=new users({
            ...req.body,
            password:hashedPassword
        })

        try{
            const savedUser=await newUser.save();
            const token=jwt.sign({email:req.body.email},process.env.ACCESS_TOKEN_SECRET);
            res.status(200).json({user:savedUser,token:token});
        }
        catch(err)
        {
            next(err);
        }

    }
    catch(err)
    {
        console.log(err);
        res.status(500).json(err); 
    }
}

const login=async(req,res,next)=>{
    try
    {
        const user=await users.findOne({email:req.body.email});
    
        if(!user || !bcrypt.compareSync(req.body.password,user.password))
        {
            return res.status(401).json({message:'Invalid Credentials'});
        }
    
    
        const token=jwt.sign({email:user.email,role:user.role,id:user._id},process.env.ACCESS_TOKEN_SECRET,{expiresIn:"3h"});
    
        const { password,role, ...otherDetails } = user._doc;
        res.cookie("access_token",token,{httpOnly:true}).status(200).json("You are logged in");
    }
    catch(err)
    {
        console.log(err);
        return res.status(401).json({message:"Login error"});
    }
}

const editMyInfo=async (req,res,next)=>{
    try
    {
        const updatedUser=await users.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
        return res.status(200).json(updatedUser);
    }
    catch(err)
    {
        return res.status(400).send("Unable to edit your info");
    }
}

const deleteMyAccount=async(req,res,next)=>
{
    try
    {
        await users.findByIdAndDelete(req.params.id);
        res.status(200).json("Your account has been deleted");
    }
    catch(err)
    {
        return res.status(400).send("Unable to delete the Restaurant");
    }
}


const getMyProfile=async (req,res,next)=>
{
    try
    {
        const gettinguser= await users.findById(req.params.id);
        return res.status(200).json(gettinguser);
    }
    catch(err)
    {
        return res.status(400).send("Cannot get the user");
    }
}







module.exports={register,login,getMyProfile,editMyInfo,deleteMyAccount};