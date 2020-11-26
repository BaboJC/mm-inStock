// Libraries
const express=require('express');
const app=express();
const cors=require('cors');

// End points
const warehouses=require('./routes/routesWarehouses');
const inventories=require('./routes/routesInventories');

// Keep port "secret"
require('dotenv').config();
const port = process.env.PORT || 3003;

// 
app.use(express.json());
app.use(cors());

// Add end points
app.use('/warehouses',warehouses)
app.use('/inventories',inventories)

// Listen
app.listen (port, () => {
    console.log(`listening at http://localhost:${port}`);
});