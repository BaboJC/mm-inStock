import React from "react"
import "./style/App.css"
import { Switch, Route } from "react-router-dom"
import Nav from "./components/Nav"
import WarehouseDetails from "./Pages/WarehouseDetails"
import EditWarehouse from "./Pages/EditWarehouse"
import AddWarehouse from "./Pages/AddWarehouse"
import WarehousePage from "./Pages/WarehousesPage"
import InventoryList from "./Pages/InventoryList"
import InventoryItem from "./Pages/InventoryItem"
import EditInventory from "./Pages/EditInventory"
import AddInventory from "./Pages/AddInventory"
import Footer from "./components/Footer"
import WarehouseDeletePopUp from "./Pages/WarehouseDeletePopUp"

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <main className="main">
          <Switch>
            <Route path="/warehouses" exact component={WarehousePage} />
            <Route path="/warehouses/add" component={AddWarehouse} />
            <Route path="/warehouses/:id" exact component={WarehouseDetails} />
            <Route
              path="warehouses/:id/delete"
              component={WarehouseDeletePopUp}
            />
            <Route path="/warehouses/:id/edit" component={EditWarehouse} />
            <Route path="/inventories" exact component={InventoryList} />
            <Route path="/inventories/add" component={AddInventory} />
            <Route path="/inventories/:id" exact component={InventoryItem} />
            <Route path="/inventories/:id/edit" component={EditInventory} />
          </Switch>
          <Footer />
        </main>
      </div>
    )
  }
}

export default App
