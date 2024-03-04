const express=require('express');
const router=express.Router();
const {verifyUser,verifyAdmin}=require('../middlewares/auth.js')
const {register,login,getMyProfile,editMyInfo,deleteMyAccount}= require('../controllers/users.js');

router.post('/register',register);
router.post('/login',login);
router.get('/:id',verifyUser,getMyProfile);  
router.put('/:id',verifyUser,editMyInfo);   
router.delete('/:id',verifyUser,deleteMyAccount); 


module.exports=router;
