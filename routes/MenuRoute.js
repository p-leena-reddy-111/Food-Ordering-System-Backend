const express=require('express');
const router=express.Router();

const {verifyAdmin,verifyUser}=require('../middlewares/auth.js')
const {createMenu,updateMenu}=require('../controllers/menus.js');

router.post('/',verifyAdmin,createMenu);
router.put('/:id',verifyAdmin,updateMenu);

module.exports=router;
