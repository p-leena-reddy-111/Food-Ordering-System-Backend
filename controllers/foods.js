const food=require('../models/food.js');

const createFood = async(req,res,next)=>{
    const newFood=new food(req.body);
    try
    {
        const savedFood=await newFood.save();
        return res.status(201).json(savedFood);
    }
    catch(err)
    {
        return res.status(400).send("Unable to add the Food");
    }
}

const updateFood=async (req,res,next)=>{
    try
    {
        const updatedFood=await food.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
        return res.status(200).json(updatedFood);
    }
    catch(err)
    {
        return res.status(400).send("Unable to update the Food");
    }
}

const deleteFood=async(req,res,next)=>
{
    try
    {
        await food.findByIdAndDelete(req.params.id);
        res.status(200).json("Food has been deleted");
    }
    catch(err)
    {
        return res.status(400).send("Unable to delete the Food");
    }

}

const getFood=async(req,res,next)=>{
    try
    {
        const Food=await food.findById(req.params.id);
        return res.status(200).json(Food);
    }
    catch(err)
    {
       return res.status(404).send("Food not found");
    }
}

const getFoods=async(req,res,next)=>{
    try
    {
        const Foods=await food.find();
        return res.status(200).json(Foods);
    }
    catch(err)
    {
        return res.status(400).send("Unable to get the foods");
    }
}

module.exports={createFood,updateFood,deleteFood,getFood,getFoods};