import Axios from "axios"
import React from "react"
import backButton from "../assets/Icons/arrow_back-24px.svg"
import { Link } from "react-router-dom"
import InventoryListItem from "../components/InventoryListItem"

class WarehouseDetails extends React.Component {
  state = {
    warehouseInfo: {},
    warehouseInventory: [],
  }

  getWarehouseDetails(id) {
    Axios.get(`http://localhost:5000/warehouses/${id}`)
      .then((response) => {
        this.setState({
          warehouseInfo: response.data,
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  getWarehouseInventory(id) {
    Axios.get(`http://localhost:5000/inventories/warehouseid/${id}`)
      .then((response) => {
        this.setState({
          warehouseInventory: response.data,
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  componentDidMount() {
    const { id } = this.props.match.params
    this.getWarehouseDetails(id)
    this.getWarehouseInventory(id)
  }

  render() {
    const { name, address, city, country, contact } = this.state.warehouseInfo
    return (
      <div className="card-look">
        <div className="alt-title">
          <Link to="/warehouses">
            <img
              className="alt-title__return"
              src={backButton}
              alt="back button"
            />
          </Link>
          <h1 className="title__h1">{name}</h1>
          {/* <img className="warehouse-details__edit" src="" alt="edit button"/> */}
        </div>
        <section className="list__item">
          <div className="list__info-container list__info-container--modified">
            <div className="list__section">
              <h4 className="list__label">warehouse address:</h4>
              <p className="list__info">
                {address}, {city}, {country}
              </p>
            </div>
            <div className="list__bottom">
              <div className="list__section">
                <h4 className="list__label">contact name:</h4>
                <p className="list__info">{contact && contact.name}</p>
                <p className="list__info">{contact && contact.position}</p>
              </div>
              <div className="list__section">
                <h4 className="list__label">contact information:</h4>
                <p className="list__info">{contact && contact.phone}</p>
                <p className="list__info">{contact && contact.email}</p>
              </div>
            </div>
          </div>
        </section>
        <ul className="warehouse__list">
          {this.state.warehouseInventory.map((inventory) => (
            <InventoryListItem
              key={inventory.id}
              id={inventory.id}
              item={inventory.itemName}
              category={inventory.category}
              status={inventory.status}
              quantity={inventory.quantity}
              warehouseSection={false}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default WarehouseDetails
