<<<<<<< HEAD
const express=require('express');
const router=express.Router();
const fs=require('fs'); // file system module
const path=require('path');
// const { v4: uuidv4 }=require('uuid');
const dataInventories=path.join(__dirname, '../data/inventories.json');

function listInventories(){
    const data=fs.readFileSync(dataInventories);
    return JSON.parse(data);
    
} 
console.log(listInventories)

router.get('/',(req, res)=>{
    res.json(listInventories())
});

function getInventoriesByID(id){
    const inventoriesArray=listInventories();
    let filteredItems=inventoriesArray.filter((inventories)=>inventories.id===id);
    if(filteredItems.length){
        return filteredItems;
    }
}
router.get(('/'),(req,  res)=>{
    res.json(getInventoriesByID(req.params.id).shift());
})
module.exports=router;
=======
const express = require("express")
const router = express.Router()
const inventoriesController = require("../controllers/inventoriesController")

// GET /inventories
router.get("/", inventoriesController.getAllItems)

// POST /inventories/add
router.post("/add", inventoriesController.createNewItem)

// GET /inventories/:id
router.get("/:id", inventoriesController.getItemByID)

//GET /inventories/warehouseid/:warehouseid
router.get(
  "/warehouseid/:warehouseid",
  inventoriesController.getItemByWarehouseID
)

// DELETE /inventories/:id
router.delete("/:id", inventoriesController.deleteItem)

// PUT /inventories/:id
router.put("/:id", inventoriesController.editItem)

module.exports = router
>>>>>>> development
