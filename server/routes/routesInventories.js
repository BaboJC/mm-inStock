const express=require('express');
const router=express.Router();
const inventoriesController = require('../controllers/inventoriesController');

// Get inventory items
router.get('/', inventoriesController.getAllItems);

router.get('/:id', inventoriesController.getItemByID);

module.exports=router;