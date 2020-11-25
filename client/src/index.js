import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import Header from "./components/Header"
import WarehouseDetails from "./components/WarehouseDetails"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <div className="card-look">
        <Switch>
          <Route path="/" exact component={App} />
          <Route path="/:warehouseID" component={WarehouseDetails} />
        </Switch>
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
)
