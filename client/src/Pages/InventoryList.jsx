import Axios from "axios"
import React from "react"
import { Link } from "react-router-dom"
import InventoryListItem from "../components/InventoryListItem"
import axios from "axios"

class InventoryList extends React.Component {
  state = {
    inventory: [],
  }

  getInventoryList() {
    Axios.get("http://localhost:5000/inventories")
      .then((response) => {
        this.setState({
          inventory: response.data,
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  componentDidMount() {
    this.getInventoryList()
  }

  render() {
    return (
      <div className="card-look">
        <div className="title">
          <h1 className="title__h1">Inventory</h1>
          <form className="search-form">
            <input
              className="search-form__searchbar"
              type="text"
              placeholder="Search..."
            />
          </form>
          <Link to="/inventories/add">
            <button className="title__add-button">+ Add New Item</button>
          </Link>
        </div>
        <ul className="list">
          {this.state.inventory.map((inventory) => (
            <InventoryListItem
              key={inventory.id}
              id={inventory.id}
              name={inventory.warehouseName}
              item={inventory.itemName}
              category={inventory.category}
              status={inventory.status}
              quantity={inventory.quantity}
              warehouse={inventory.warehouseName}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default InventoryList
