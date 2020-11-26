import React from "react"
import WarehouseListItem from "../components/WarehouseListItem"
import axios from "axios"
import { Link } from "react-router-dom"

class WarehousePage extends React.Component {
  state = {
    warehouses: [],
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

  componentDidMount() {
    this.getWarehouseList()
  }

  render() {
    return (
      <main className="main">
        <div className="warehouse">
          <h1 className="warehouse__title">Warehouses</h1>
          <form className="warehouse__form">
            <input
              className="warehouse__searchbar"
              type="text"
              placeholder="Search..."
            />
          </form>
          <Link to="/add">
            <button className="warehouse__add-warehouse">
              + Add New Warehouse
            </button>
          </Link>
        </div>
        <ul className="warehouse__list">
          {this.state.warehouses.map((warehouse) => (
            <WarehouseListItem
              id={warehouse.id}
              name={warehouse.name}
              address={warehouse.address}
              city={warehouse.city}
              country={warehouse.country}
              contact={warehouse.contact}
            />
          ))}
        </ul>
      </main>
    )
  }
}

export default WarehousePage
