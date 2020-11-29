const express=require('express');
const router=express.Router();
const fs=require('fs'); // file system module
const { Server } = require('http');
const path=require('path');
const { v4: uuidv4 }=require('uuid');


const dataWarehouses=path.join(__dirname, '../data/warehouses.json');
const dataInventories=path.join(__dirname, '../data/inventories.json');

function listWarehouses(){
    const data=fs.readFileSync(dataWarehouses);
    return JSON.parse(data);
    
} 
router.get('/',(req, res)=> {

    res.json(listWarehouses())
});

function listInventories(){
    const data=fs.readFileSync(dataInventories);
    return JSON.parse(data);
}
router.get('/',(req, res)=> {

    res.json(listInventories())
});

function getWarehousesByID(id){
    const warehousesArray=listWarehouses();
    let filteredItems=warehousesArray.filter((warehouses)=>warehouses.id===id);
    if(filteredItems.length){
        return filteredItems;
    }
    else{
        return("The Warehouse you are looking for does not exist")
    }
}
router.get('/:id',(req,  res)=>{
    res.json(getWarehousesByID(req.params.id).shift());
})

function addWarehouses(body){
    const itemList=listWarehouses();
    const item=NewWarehouses(body);
    itemList.push(item);
    fs.writeFileSync(dataWarehouses, JSON.stringify(itemList));
    return itemList
}

function NewWarehouses(body){
    return{id: uuidv4(),
        name:body.name,
        address:body.address,
        city:body.city,
        country:body.country,
        contact:{
            name:body.contact.name,
            position:body.contact.position,
            phone:body.contact.phone,
            email:body.contact.email
        }

    }
}
router.post('/',(req, res)=>{
    res.json(addWarehouses(req.body));
});

function deleteWarehouse (id){
    const listWarehouse = listWarehouses();
    const deleted = listWarehouse.find((warehouses)=>warehouses.id===id);
    if(deleted){
        newArray = listWarehouse.filter(warehouses=>warehouses.id !== id);
        fs.writeFileSync(dataWarehouses, JSON.stringify(newArray)); 
        return ("Warehouse Deleted!",newArray);
    }
    else {
        return ("The warehouse does not exist");
    }

}
router.delete(('/:id'),(req,res)=>{
    res.status(200).json(deleteWarehouse(req.params.id))
})

function patchWarehouse(body){
    const warehousesArray = listWarehouses();
    let newWareArray = warehousesArray.filter((warehouses)=>warehouses.id === body.id).pop();

    if (body.name) {
        const inventoriesArray = listInventories();
        
        let newInvArray= inventoriesArray.filter((inventory)=>inventory.warehouseID === newWareArray.id).map((filteredItem) =>{return{...filteredItem, warehouseName:body.name}});
        
        let inventoryUpdated = inventoriesArray.filter((inventory)=>inventory.warehouseID !== newWareArray.id);
        inventoryUpdated = [...inventoryUpdated, ...newInvArray];

        fs.writeFileSync(dataInventories, JSON.stringify(inventoryUpdated));
       
    }
    newWareArray={id:newWareArray.id,
        name:body.name ? body.name:newWareArray.name,
        address:body.address ? body.address: newWareArray.address,
        city:body.city ? body.city:newWareArray.city,
        country:body.country ? body.country:newWareArray.country,
        contact:{
            name:body.contact.name ? body.contact.name:newWareArray.contact.name,
            position:body.contact.position ? body.contact.position:newWareArray.contact.position,
            phone:body.contact.phone ? body.contact.phone:newWareArray,
            email:body.contact.email ? body.contact.email:newWareArray
        },
    }
    const warehouseUpdated = listWarehouses().filter((warehouses)=>warehouses.id !== body.id);

    warehouseUpdated.push(newWareArray)

    fs.writeFileSync(dataWarehouses, JSON.stringify(warehouseUpdated));
    
    return newWareArray
    
}


router.patch(('/'),(req,res)=>{
    res.json(patchWarehouse(req.body))
})


module.exports=router;