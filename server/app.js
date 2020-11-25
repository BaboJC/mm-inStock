const express=require('express');
const app=express();
const warehouses=require('./routes/routesWarehouses')
const inventories=require('./routes/routesInventories')
const cors=require('cors');


app.use(express.json());
app.use(cors());

app.use('/warehouses',warehouses)
app.use('/inventories',inventories)

app.listen (5000, () => {
    console.log('listening at http://localhost:5000');
});
