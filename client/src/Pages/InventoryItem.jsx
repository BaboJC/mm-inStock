import React from "react"
import backButton from "../assets/Icons/arrow_back-24px.svg"
import { Link } from "react-router-dom"

class InventoryItem extends React.Component {
  state = {
    inventoryItem: {
      id: "9b4f79ea-0e6c-4e59-8e05-afd933d0b3d3",
      warehouseID: "2922c286-16cd-4d43-ab98-c79f698aeab0",
      warehouseName: "Manhattan",
      itemName: "Television",
      description:
        'This 50", 4K LED TV provides a crystal-clear picture and vivid colors.',
      category: "Electronics",
      status: "In Stock",
      quantity: 500,
    },
  }

  render() {
    const {
      itemName,
      description,
      category,
      status,
      quantity,
      warehouseName,
    } = this.state.inventoryItem
    return (
      <div className="card-look">
        <div className="alt-title">
          <Link to="/inventories">
            <img
              className="alt-title__return"
              src={backButton}
              alt="back button"
            />
          </Link>
          <h1 className="title__h1">{itemName}</h1>
        </div>
        <section className="inventory-item">
          <div className="inventory-item__container">
            <h4 className="inventory-item__label">item description:</h4>
            <p className="inventory-item__info">{description}</p>
          </div>
          <div className="inventory-item__container">
            <h4 className="inventory-item__label">category:</h4>
            <p className="inventory-item__info">{category}</p>
          </div>
        </section>
        <section className="inventory-item">
          <div className="inventory-item__container">
            <h4 className="inventory-item__label">status:</h4>
            <div
              className={
                status === "In Stock"
                  ? "inventory-item__green"
                  : "inventory-item__red"
              }
            >
              <p
                className={
                  status === "In Stock"
                    ? "inventory-item__info inventory-item__info--instock"
                    : "inventory-item__info inventory-item__info--outofstock"
                }
              >
                {status}
              </p>
            </div>
          </div>
          <div className="inventory-item__container">
            <h4 className="inventory-item__label">warehouse:</h4>
            <p className="inventory-item__info">{warehouseName}</p>
          </div>
          <div className="inventory-item__container">
            <h4 className="inventory-item__label">quantity:</h4>
            <p className="inventory-item__info">{quantity}</p>
          </div>
        </section>
      </div>
    )
  }
}

export default InventoryItem
