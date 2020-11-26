const express=require('express');
const router=express.Router();
const inventoriesController = require('../controllers/inventoriesController');

router.get('/',(req, res)=>{
    res.json(inventoriesController.getAllItems)
});

router.get(('/'),(req,  res)=>{
    res.json(inventoriesController.getItemsByID);
})

module.exports=router;