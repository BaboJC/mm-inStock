const express = require('express');
const router = express.Router();
const inventoriesController = require('../controllers/inventoriesController');

// GET /inventories
router.get('/', inventoriesController.getAllItems);

// POST /inventories/add
router.post('/add', inventoriesController.createNewItem);

// GET /inventories/:id
router.get('/:id', inventoriesController.getItemByID);

// DELETE /inventories/:id
router.delete('/:id', inventoriesController.deleteItem);

// PUT /inventories/:id
router.put('/:id', inventoriesController.editItem);

module.exports = router;