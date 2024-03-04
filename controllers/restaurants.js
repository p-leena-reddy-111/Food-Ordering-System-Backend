const express=require('express');
const mongoose=require('mongoose');
const restaurant=require('../models/restaurant.js');
const menu=require("../models/menu.js");


const createRestaurant = async(req,res,next)=>{
    const newRestaurant=new restaurant(req.body);
    try
    {
        const savedRestaurant=await newRestaurant.save();
        return res.status(201).json(savedRestaurant);
    }
    catch(err)
    {
        console.log(err);
        return res.status(400).send("Unable to add the Restaurant");
    }
}

const updateRestaurant=async (req,res,next)=>{
    try
    {
        const updatedRestaurant=await restaurant.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
        return res.status(200).json(updatedRestaurant);
    }
    catch(err)
    {
        return res.status(400).send("Unable to update the Restaurant");
    }
}

const deleteRestaurant=async(req,res,next)=>
{
    try
    {
        await restaurant.findByIdAndDelete(req.params.id);
        res.status(200).json("Hotel has been deleted");
    }
    catch(err)
    {
        return res.status(400).send("Unable to delete the Restaurant");
    }

}


const getRestaurant=async(req,res,next)=>{
    try
    {
        const Restaurant = await restaurant.findById(req.params.id).populate({ path: 'menu', populate: { path: 'food_items' } });
        return res.status(200).json(Restaurant);
    }
    catch(err)
    {
        console.log(err);
        return res.status(404).send("Unable to get the Restaurant");
    }
}

const getMenu=async(req,res,next)=>{
    try
    {
        const Restaurant = await restaurant.findById(req.params.id).populate({ path: 'menu', populate: { path: 'food_items' } });
        return res.status(200).json(Restaurant.menu.food_items);
    }
    catch(err)
    {
        console.log(err);
        return res.status(400).send("Unable to get the Menu");
    }
}

const getRestaurants=async(req,res,next)=>{
    try
    {
        const Restaurants=await restaurant.find({},{"name": 1,"_id":0});
        return res.status(200).json(Restaurants);
    }
    catch(err)
    {
        return res.status(400).send("Cannot get the Restaurant");
    }
}

module.exports={createRestaurant,updateRestaurant,deleteRestaurant,getRestaurant,getRestaurants,getMenu};