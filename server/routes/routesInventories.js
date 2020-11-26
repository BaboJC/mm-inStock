const express = require('express');
const router = express.Router();
const inventoriesController = require('../controllers/inventoriesController');

// GET /inventories
router.get('/', inventoriesController.getAllItems);

// GET /inventories/:id
router.get('/:id', inventoriesController.getItemByID);

// DELETE /inventories/:id
router.delete('/:id', inventoriesController.deleteItem);

module.exports = router;