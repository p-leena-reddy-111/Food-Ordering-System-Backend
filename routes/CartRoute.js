const express=require('express');
const router=express.Router();

const {verifyUser}=require('../middlewares/auth.js')
const {addtoCart,editCart,getCart}=require('../controllers/carts.js');


router.post('/addtoCart/:id',verifyUser,addtoCart);
router.put( '/modifyCart/:cartId',verifyUser, editCart );
router.get('/getCart/:cartId',verifyUser, getCart);

module.exports=router;
