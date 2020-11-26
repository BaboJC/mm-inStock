const items = require('../models/inventoriesModel');

function getAllItems(_req, res) {
    res.status(200).json(items.listInventories());
}
  
function getItemByID(req, res) {
    res.json(items.getByID(req.params.id).shift());
}

function createNewItem(req, res) {
    if (!req.body.warehouseName || !req.body.itemName || !req.body.description || !req.body.category || !req.body.status || !req.body.quantity) {
      res.status(400).json({
        error: 'POST body must contain all requiredProperties',
        requiredProperties: ['warehouseName', 'itemName', 'description', 'category', 'quantity'],
      });
    }
  
    const newItem = {
      warehouseName: req.body.warehouseName,
      itemName: req.body.itemName,
      description: req.body.description,
      category: req.body.category,
      status: req.body.status,
      quantity: req.body.quantity
    };
    res.status(201).json(items.add(newItem));
}

function deleteItem(req, res) {
  res.json(items.deleteItem(req.params.id));
}

module.exports = {
  getAllItems,
  getItemByID,
  createNewItem,
  deleteItem
}