import React from "react"
import Axios from "axios"
import arrowback from "../assets/Icons/arrow_back-24px.svg"
import TextFormInput from "../components/TextFormInput"
import { Link } from "react-router-dom"

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

  updateWarehouse = (event) => {
    event.preventDefault()
    const form = event.target
    const name = form.name.value
    const address = form.address.value
    const city = form.city.value
    const country = form.country.value
    const contact = form.contact.value
    const position = form.position.value
    const phone = form.phone.value
    const email = form.email.value

    const updatedWarehouse = {
      id: this.state.warehouseInfo.id,
      name: name,
      address: address,
      city: city,
      country: country,
      contact: [
        {
          name: contact,
          position: position,
          phone: phone,
          email: email,
        },
      ],
    }

    Axios.put(
      `http://localhost:5000/warehouse/${this.state.warehouseInfo.id}`,
      updatedWarehouse
    ).then(alert("changes have been made"))
  }

  componentDidMount() {
    const { id } = this.props.match.params
    this.getWarehouseDetails(id)
  }

  render() {
    const { name, address, city, country, contact } = this.state.warehouseInfo
    return (
      <div className="card-look">
        <div className="alt-title">
          <Link to="/warehouses">
            <img
              className="alt-title__return"
              src={arrowback}
              alt="back button"
            />
          </Link>

          <h1 className="title__h1">Edit Warehouse</h1>
        </div>

        <form className="form" onSubmit={this.updateWarehouse}>
          <section className="form__section">
            <h2 className="form__h2">Warehouse Details</h2>
            <TextFormInput
              inputValue="Warehouse Name"
              inputName="name"
              fill={name}
            />
            <TextFormInput
              inputValue="Street Address"
              inputName="address"
              fill={address}
            />
            <TextFormInput inputValue="City" inputName="city" fill={city} />

            <TextFormInput
              inputValue="Country"
              inputName="country"
              fill={country}
            />
          </section>
          <section className="form__section">
            <h2 className="form__title">Contact Details</h2>
            <TextFormInput
              inputValue="Contact Name"
              inputName="contact"
              fill={contact && contact.name}
            />
            <TextFormInput
              inputValue="Position"
              inputName="position"
              fill={contact && contact.position}
            />
            <TextFormInput
              inputValue="Phone Number"
              inputName="phone"
              fill={contact && contact.phone}
            />
            <TextFormInput
              inputValue="Email"
              inputName="email"
              fill={contact && contact.email}
            />
          </section>
          <section className="form__buttons">
            <button className="form__button">Cancel</button>
            <input
              className="form__button form__button--blue"
              type="submit"
              value="Save"
            />
          </section>
        </form>
      </div>
    )
  }
}

export default EditWarehouse
