const express=require('express');
const router=express.Router();
const fs=require('fs'); // file system module
const path=require('path');
const { v4: uuidv4 }=require('uuid');


const dataWarehouses=path.join(__dirname, '../data/warehouses.json');

function listWarehouses(){
    const data=fs.readFileSync(dataWarehouses);
    return JSON.parse(data);
    
} 
// console.log(listWarehouses)

router.get('/',(req, res)=> {

    res.json(listWarehouses())
});

function getWarehousesByID(id){
    const warehousesArray=listWarehouses();
    let filteredItems=warehousesArray.filter((warehouses)=>warehouses.id===id);
    if(filteredItems.length){
        return filteredItems;
    }
}
router.get(('/:id'),(req,  res)=>{
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
        contact:[{
            name:body.contact.name,
            position:body.contact.position,
            phone:body.contact.phone,
            email:body.contact.email
        }]

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
    res.json(deleteWarehouse(req.params.id))
})
module.exports=router;