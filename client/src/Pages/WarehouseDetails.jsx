import Axios from "axios"
import React from "react"
import backButton from "../assets/Icons/arrow_back-24px.svg"
import { Link } from "react-router-dom"

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

  componentDidMount() {
    const { id } = this.props.match.params
    this.getWarehouseDetails(id)
  }

  render() {
    const { name, address, city, country, contact } = this.state.warehouseInfo

    return (
      <main className="main">
        <div className="warehouse-details">
          <h1 className="warehouse-details__title">
            <Link to="/">
              <img
                className="warehouse__back"
                src={backButton}
                alt="back button"
              />
            </Link>
            {name}
          </h1>
          {/* <img className="warehouse-details__edit" src="" alt="edit button"/> */}
        </div>
        <section className="warehouse-details__info">
          <div className="warehouse-details__address">
            <h4 className="warehouse-item__label">warehouse address:</h4>
            <p className="warehouse-item__info">
              {address}, {city}, {country}
            </p>
          </div>
          <div className="warehouse-details__contact">
            <div className="warehouse-details__contact-name">
              <h4 className="warehouse-item__label">contact name:</h4>
              <p className="warehouse-item__info">{contact && contact.name}</p>
              <p className="warehhouse-item__info">
                {contact && contact.position}
              </p>
            </div>
            <div className="warehouse-details__contact-information">
              <h4 className="warehouse-item__label">contact information:</h4>
              <p className="warehouse-item__info">{contact && contact.phone}</p>
              <p className="warehouse-item__info">{contact && contact.email}</p>
            </div>
          </div>
        </section>
      </main>
    )
  }
}

export default WarehouseDetails
