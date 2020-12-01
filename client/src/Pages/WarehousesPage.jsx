import React from "react"
import WarehouseListItem from "../components/WarehouseListItem"
import axios from "axios"
import { Link } from "react-router-dom"
import WarehousePopUp from "./WarehouseDeletePopUp"

class WarehousePage extends React.Component {
  state = {
    warehouses: [],
    // deletePopUp: false,
  }

  getWarehouseList() {
    axios
      .get("http://localhost:5000/warehouses")
      .then((response) => {
        this.setState({
          warehouses: response.data,
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  deleteWarehouse = (id) => {
    alert(id)
    axios.delete(`http://localhost:5000/warehouses/${id}`).then((response) => {
      if (response.data != null) {
        alert("Deleted successfully")
        this.getWarehouseList()
        // this.setState({
        //   filteredWarehouse: this.state.warehouses.filter((warehouse)=> warehouse.id===id)
        // })
      }
    })
  }

  // toggleDelete = () => {
  //   this.setState({
  //     deletePopUp: !this.state.deletePopUp,
  //   })
  //   console.log("toggle")
  // }

  componentDidMount() {
    this.getWarehouseList()
  }

  render() {
    return (
      <>
        <div className="card-look">
          <div className="title">
            <h1 className="title__h1">Warehouses</h1>
            <form className="search-form">
              <input
                className="search-form__searchbar"
                type="text"
                placeholder="Search..."
              />
            </form>
            <Link to="/warehouses/add">
              <button className="title__add-button">+ Add New Warehouse</button>
            </Link>
          </div>
          <ul className="list">
            {this.state.warehouses.map((warehouse) => (
              <WarehouseListItem
                key={warehouse.id}
                id={warehouse.id}
                name={warehouse.name}
                address={warehouse.address}
                city={warehouse.city}
                country={warehouse.country}
                contact={warehouse.contact}
                // toggleDelete={this.toggleDelete}
              />
            ))}
          </ul>
        </div>
        {/* {this.state.deletePopUp ? (
          <WarehousePopUp cancelDelete={this.toggleDelete} />
        ) : null} */}
      </>
    )
  }
}

export default WarehousePage
