import Axios from "axios"
import React from "react"
import backButton from "../assets/Icons/arrow_back-24px.svg"

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
    this.getWarehouseDetails("2922c286-16cd-4d43-ab98-c79f698aeab0")
  }

  componentDidUpdate() {
    console.log(this.state.warehouseInfo.contact.name)
  }

  render() {
    const { name, address, city, country } = this.state.warehouseInfo

    return (
      <main className="main">
        <div className="warehouse-details">
          <h1 className="warehouse-details__title">
            <img
              className="warehouse__back"
              src={backButton}
              alt="back button"
            />
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
              <p className="warehouse-item__info">
                {/* contact continue off here */}
              </p>
            </div>
          </div>
        </section>
      </main>
    )
  }
}

export default WarehouseDetails
