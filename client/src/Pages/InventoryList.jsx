import React from "react"
import { Link } from "react-router-dom"
import InventoryListItem from "../components/InventoryListItem"

class InventoryList extends React.Component {
  state = {
    inventories: [
      {
        id: "3ce124a4-78b0-4d80-91b9-11f9ced631a7",
        warehouseID: "2922c286-16cd-4d43-ab98-c79f698aeab0",
        warehouseName: "Manhattan",
        itemName: "Phone Charger",
        description:
          "This USB-C phone charger features fast charging for the latest devices.",
        category: "Electronics",
        status: "In Stock",
        quantity: 10000,
      },
      {
        id: "83433026-ca32-4c6d-bd86-a39ee8b7303e",
        warehouseID: "2922c286-16cd-4d43-ab98-c79f698aeab0",
        warehouseName: "Manhattan",
        itemName: "Gym Bag",
        description:
          "Made out of military-grade synthetic materials, this gym bag is highly durable, water resistant, and easy to clean.",
        category: "Gear",
        status: "Out of Stock",
        quantity: 0,
      },
    ],
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
          {this.state.inventories.map((inventory) => (
            <InventoryListItem
              key={inventory.id}
              id={inventory.id}
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
