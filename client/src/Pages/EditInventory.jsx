import React from "react"
import Axios from "axios"
import arrowback from "../assets/Icons/arrow_back-24px.svg"

class EditInventoy extends React.Component {
  state = {
    inventoryItem: {},
  }

  render() {
    return (
      <main className="main">
        <h1 className="edit-warehouse__title">
          <img className="return-button" src={arrowback} alt="back button" />
          Edit Warehouse
        </h1>
      </main>
    )
  }
}
