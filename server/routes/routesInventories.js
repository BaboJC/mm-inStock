const express=require('express');
const router=express.Router();

router.get('/',(req, res)=>{
    res.json(listInventories())
});

router.get(('/'),(req,  res)=>{
    res.json(getInventoriesByID(req.params.id).shift());
})

module.exports=router;