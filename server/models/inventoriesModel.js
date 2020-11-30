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
    return JSON.parse(data);
}

// Add item to json file
function add(data) {
    const itemList = listInventories();
    const item = new NewInventoryItem(data.warehouseID, data.warehouseName, data.itemName, data.description, data.category, data.status, data.quantity);
    itemList.push(item);
    fs.writeFileSync(dataInventories, JSON.stringify(itemList));
    return itemList;
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

// Delete item by id
function deleteItem(id) {
    const itemsArr = listInventories();
    console.log(`Array is ${itemsArr}`);
    console.log(`Array length is ${itemsArr.length}`);
    const itemIndex = itemsArr.findIndex((item) => item.id === id);
    console.log(`itemIndex is ${itemIndex}`);
    itemsArr.splice(itemIndex, 1);
    console.log(`Array length after splice is ${itemsArr.length}`);
    fs.writeFileSync(dataInventories, JSON.stringify(itemsArr));
    return itemsArr;
}

// Edit inventory item
function editItem(id, data) {
  const itemsArr = listInventories();
  const itemIndex = itemsArr.findIndex((item) => item.id === id);
  itemsArr.splice(itemIndex, 1, {
    id: id,
    warehouseID: data.warehouseID,
    warehouseName: data.warehouseName,
    itemName: data.itemName,
    description: data.description,
    category: data.category,
    status: data.status,
    quantity: data.quantity
  });
  fs.writeFileSync(dataInventories, JSON.stringify(itemsArr));
  return itemsArr;
}

module.exports = { listInventories, add, getByID, deleteItem, editItem };