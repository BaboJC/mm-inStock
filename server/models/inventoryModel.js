const fs=require('fs');
const path=require('path');
const dataInventories=path.join(__dirname, '../data/inventories.json');

function listInventories(){
    const data=fs.readFileSync(dataInventories);
    return JSON.parse(data);
    
}

function getInventoriesByID(id){
    const inventoriesArray=listInventories();
    let filteredItems=inventoriesArray.filter((inventories)=>inventories.id===id);
    if(filteredItems.length){
        return filteredItems;
    }
}