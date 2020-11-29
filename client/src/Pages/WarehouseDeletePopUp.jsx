import React, { Component } from "react"
import WarehouseDeleteButton from "../components/WarehouseDeleteButton"

class WarehousePopUp extends Component {
  render() {
    return (
      <div>
        {/*bring in the name form warehouse using id */}
        <p>Delete Warehouse</p>
        <button>Cancel</button>
        <WarehouseDeleteButton />
      </div>
    )
  }
}
export default WarehousePopUp
