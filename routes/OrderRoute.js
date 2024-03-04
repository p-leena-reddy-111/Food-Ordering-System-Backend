const express=require('express');
const router=express.Router();

const {placeOrder,getOrder,updateOrder,cancelOrder}=require('../controllers/orders.js');
const {verifyAdmin,verifyUser}=require('../middlewares/auth.js');

router.post("/",verifyUser,placeOrder);
router.get("/:orderId",verifyUser,getOrder);
router.put("/:orderId",verifyAdmin,updateOrder);
router.delete("/:orderId",verifyUser,cancelOrder);

module.exports=router;