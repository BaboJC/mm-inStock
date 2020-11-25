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
          <Route
            path="/warehouse/:warehouseID"
            exact
            component={WarehouseDetails}
          />
          <Route
            path="/warehouse/:warehouseID/edit"
            component={EditWarehouse}
          />
          <Route path="/warehouse/add" exact component={AddWarehouse} />
        </Switch>
      </div>
    )
  }
}

export default App
