import React, { Component } from "react"

import WarehouseDeleteButton from "../components/WarehouseDeleteModal"


class WarehousePopUp extends Component {
  render() {
    return (
      <div className="popup">
        <div className="popup__inner">
          <h1>Are you sure?</h1>
          {/* <button onClick={this.props.cancelDelete}>Close</button> */}
        </div>
      </div>
    )
  }
}
export default WarehousePopUp
