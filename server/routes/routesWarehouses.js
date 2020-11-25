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
router.get(('/'),(req,  res)=>{
    res.json(getWarehousesByID(req.params.id).shift());
})

function addWarehouses(body){
    const itemList=listWarehouses();
    const item=NewWarehouses(body)
    // const itemList=listWarehouses.contact();
    // const contactItem=NewContactItem(contact.name,contact.position,contact.phone,contact.email);
    itemList.push(item)
    // itemList.push(contactItem);
    fs.writeFileSync(warehousesFile, Json.stringify(itemList))
    
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
            email:body.contact.email,
        }]

    }
}
router.post('/',(req, res)=>{
    res.json(addWarehouses(req.body));
});
router.post('/',(req, res)=>{
    res.json(addWarehouses(req.contact));
});
module.exports=router;