// Libraries
const fs=require('fs');
const { v4: uuid } = require('uuid');

// Data file
const dataInventories='./data/inventories.json';

// Item object constructor
function NewInventoryItem(warehouseID, warehouseName, itemName, description, category, status, quantity) {
    this.id = uuid();
    this.warehouseID = warehouseID;
    this.warehouseName = warehouseName;
    this.itemName = itemName;
    this.description = description;
    this.category = category;
    this.status = status;
    this.quantity = quantity;
}

// List array data from JSON file
function listInventories(){
    const data=fs.readFileSync(dataInventories);
    console.log(JSON.parse(data));
    return JSON.parse(data);
}

// Get single inventory by ID
function getInventoriesByID(id){
    const inventoriesArray=listInventories();
    let filteredItems=inventoriesArray.filter((inventories)=>inventories.id===id);
    if(filteredItems.length){
        return filteredItems;
    }
}

// Get item by ID param /inventories/:id
function getByID(id) {
    const itemsArr = listInventories();
    return itemsArr.filter((item) => item.id === id);
  }

module.exports = { listInventories, getByID };