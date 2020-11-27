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
        id: "4dd464d6-90b8-4330-91e0-bd1217811bd9",
        warehouseID: "2922c286-16cd-4d43-ab98-c79f698aeab0",
        warehouseName: "Manhattan",
        itemName: "Tent",
        description:
          "Perfect for spring or summer camping, this 1-person tent is easy to pack and has the option to become modular when used with other products.",
        category: "Gear",
        status: "In Stock",
        quantity: 800,
      },
    ],
  }

  render() {
    return (
      <main className="main">
        <div className="warehouse">
          <h1 className="warehouse__title">Inventory</h1>
          <form className="warehouse__form">
            <input
              className="warehouse__searchbar"
              type="text"
              placeholder="Search..."
            />
          </form>
          <Link to="/inventories/add">
            <button className="warehouse__add-warehouse">+ Add New Item</button>
          </Link>
        </div>
        <ul className="warehouse__list">
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
      </main>
    )
  }
}

export default InventoryList
