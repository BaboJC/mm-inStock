import React from "react"
import Axios from "axios"
import arrowback from "../assets/Icons/arrow_back-24px.svg"
import WarehouseFormInput from "../components/WarehouseFormInput"

class EditWarehouse extends React.Component {
  state = {
    warehouseInfo: {},
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

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  render() {
    const { name, address, city, country, contact } = this.state.warehouseInfo

    return (
      <main className="main">
        <h1 className="edit-warehouse__title">
          <img className="return-button" src={arrowback} alt="back button" />
          Edit Warehouse
        </h1>
        <form className="warehouse-form">
          <section className="warehouse-form__section">
            <h2 className="warehouse-form__title">Warehouse Details</h2>
            <WarehouseFormInput
              inputValue="Warehouse Name"
              inputName="name"
              fill={name}
            />
            <WarehouseFormInput
              inputValue="Street Address"
              inputName="street"
              fill={address}
            />
            <WarehouseFormInput
              inputValue="City"
              inputName="city"
              fill={city}
            />
            <WarehouseFormInput
              inputValue="Country"
              inputName="country"
              fill={country}
            />
          </section>
          <section className="warehouse-form__section">
            <h2 className="warehouse-form__title">Contact Details</h2>
            <WarehouseFormInput
              inputValue="Contact Name"
              inputName="contact"
              fill={contact && contact.name}
            />
            <WarehouseFormInput
              inputValue="Position"
              inputName="position"
              fill={contact && contact.position}
            />
            <WarehouseFormInput
              inputValue="Phone Number"
              inputName="phone"
              fill={contact && contact.phone}
            />
            <WarehouseFormInput
              inputValue="Email"
              inputName="email"
              fill={contact && contact.email}
            />
          </section>
          <section className="warehouse-form__buttons">
            <button className="warehouse-form__button">Cancel</button>
            <button className="warehouse-form__button--blue">Save</button>
          </section>
        </form>
      </main>
    )
  }
}

export default EditWarehouse
