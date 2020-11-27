import React from "react"
import "./style/App.css"
import { Switch, Route } from "react-router-dom"
import Header from "./components/Header"
import WarehouseDetails from "./Pages/WarehouseDetails"
import EditWarehouse from "./Pages/EditWarehouse"
import AddWarehouse from "./Pages/AddWarehouse"
import WarehousePage from "./Pages/WarehousesPage"
import InventoryList from "./Pages/InventoryList"
import InventoryItem from "./Pages/InventoryItem"

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={WarehousePage} />
          <Route path="/add" component={AddWarehouse} />
          <Route path="/warehouses/:id" exact component={WarehouseDetails} />
          <Route path="/warehouses/:id/edit" exact component={EditWarehouse} />
          <Route path="/inventories" exact component={InventoryList} />
          <Route path="/inventories/:id" component={InventoryItem} />
        </Switch>
      </div>
    )
  }
}

export default App
