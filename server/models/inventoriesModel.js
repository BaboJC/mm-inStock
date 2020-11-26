// Libraries
const fs=require('fs');
const path=require('path');
const { v4: uuid } = require('uuid');

// Data file
const dataInventories=path.join(__dirname, '../data/inventories.json');

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