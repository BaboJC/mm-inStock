import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import Header from "./components/Header"
import WarehouseDetails from "./components/WarehouseDetails"
import EditWarehouse from "./components/EditWarehouse"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import AddWarehouse from "./components/AddWarehouse"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={App} />
        <Route
          path="/warehouse/:warehouseID"
          exact
          component={WarehouseDetails}
        />
        <Route path="/warehouse/:warehouseID/edit" component={EditWarehouse} />
        <Route path="/warehouse/add" exact component={AddWarehouse} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
)
