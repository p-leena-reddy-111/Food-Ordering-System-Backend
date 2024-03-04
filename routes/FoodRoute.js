const express=require('express');
const router=express.Router();

const {verifyAdmin,verifyUser}=require('../middlewares/auth.js')
const {createFood,updateFood,deleteFood,getFood,getFoods}=require('../controllers/foods.js');

router.post('/',verifyAdmin,createFood);

router.put('/:id',verifyAdmin,updateFood);  //admin id

router.delete("/:id",verifyAdmin,deleteFood); //admin id

router.get("/:id",getFood);   //food id

router.get("/",getFoods);

module.exports=router;