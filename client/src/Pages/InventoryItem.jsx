import React from "react"
import backButton from "../assets/Icons/arrow_back-24px.svg"
import { Link } from "react-router-dom"

class InventoryItem extends React.Component {
  state = {}

  render() {
    // const {
    //   itemName,
    //   description,
    //   category,
    //   status,
    //   quantity,
    //   warehouseName,
    // } = this.state.inventoryItem
    return (
      <main className="main">
        <div className="warehouse-details">
          <h1 className="warehouse-details__title">
            <Link to="/inventories">
              <img
                className="warehouse__back"
                src={backButton}
                alt="back button"
              />
            </Link>
            {/* {itemName} */}
          </h1>
        </div>
        <section className="inventory-item__description">
          <div className="inventory-item__item-des">
            <h4 className="warehouse-item__label">item description</h4>
            {/* <p className="warehouse-item__info">{description}</p> */}
          </div>
          <div className="inventory-item__category">
            <h4 className="warehouse-item__label">category</h4>
            {/* <p className="warehouse-item__info">{category}</p> */}
          </div>
        </section>
        <section className="inventory-item__stats">
          <div className="inventory-item__status">
            <h4 className="warehouse-item__label">status</h4>
            {/* <p className="warehouse-item__info">{status}</p> */}
          </div>
          <div className="inventory-item__warehouse">
            <h4 className="warehouse-item__label">warehouse</h4>
            {/* <p className="warehouse-item__info">{warehouseName}</p> */}
          </div>
          <div className="inventory-item__quantity">
            <h4 className="warehouse-item__label">quantity</h4>
            {/* <p className="warehouse-item__info">{quantity}</p> */}
          </div>
        </section>
      </main>
    )
  }
}

export default InventoryItem
