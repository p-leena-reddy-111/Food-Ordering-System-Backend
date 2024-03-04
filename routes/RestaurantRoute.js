const express=require('express');
const router=express.Router();

const {verifyAdmin,verifyUser}=require('../middlewares/auth.js')
const {createRestaurant,updateRestaurant,deleteRestaurant,getRestaurant,getRestaurants,getMenu}=require('../controllers/restaurants.js');

router.post('/',verifyAdmin,createRestaurant);

router.put('/:id',verifyAdmin,updateRestaurant);

router.delete("/:id",verifyAdmin,deleteRestaurant);

router.get("/:id",getRestaurant);

router.get("/menu/:id",getMenu);

router.get("/",getRestaurants);

module.exports=router;