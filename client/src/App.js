import React from "react"
import "./style/App.css"
import { Switch, Route } from "react-router-dom"
import Header from "./components/Header"
import WarehouseDetails from "./Pages/WarehouseDetails"
import EditWarehouse from "./Pages/EditWarehouse"
import AddWarehouse from "./Pages/AddWarehouse"
import WarehousePage from "./Pages/WarehousesPage"

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={WarehousePage} />
          <Route path="/add" exact component={AddWarehouse} />
          <Route
            path="/warehouses/:warehouseID"
            exact
            component={WarehouseDetails}
          />
          <Route
            path="/warehouses/:warehouseID/edit"
            component={EditWarehouse}
          />
        </Switch>
      </div>
    )
  }
}

export default App
