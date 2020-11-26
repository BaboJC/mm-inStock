import Axios from "axios"
import arrowback from "../assets/Icons/arrow_back-24px.svg"
import WarehouseFormInput from "../components/WarehouseFormInput"

function AddWarehouse() {
  const addNewWarehouse = (event) => {
    event.preventDefault()
    const form = event.target
    const name = form.name.value
    const street = form.street.value
    const city = form.city.value
    const country = form.country.value
    const contact = form.contact.value
    const position = form.position.value
    const phone = form.phone.value
    const email = form.email.value

    const newWarehouse = {
      name: name,
      street: street,
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

    Axios.post("http://localhost:5000/warehouses", newWarehouse)
      .then(form.reset(), alert("New Warehouse Added"))
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <main className="edit-warehouse">
      <h1 className="edit-warehouse__title">
        <img className="return-button" src={arrowback} alt="back button" />
        Add New Warehouse
      </h1>
      <form className="warehouse-form" onSubmit={addNewWarehouse}>
        <section className="warehouse-form__section">
          <h2 className="warehouse-form__title">Warehouse Details</h2>
          <WarehouseFormInput inputValue="Warehouse Name" inputName="name" />
          <WarehouseFormInput inputValue="Street Address" inputName="street" />
          <WarehouseFormInput inputValue="City" inputName="city" />
          <WarehouseFormInput inputValue="Country" inputName="country" />
        </section>
        <section className="warehouse-form__section">
          <h2 className="warehouse-form__title">Contact Details</h2>
          <WarehouseFormInput inputValue="Contact Name" inputName="contact" />
          <WarehouseFormInput inputValue="Position" inputName="position" />
          <WarehouseFormInput inputValue="Phone Number" inputName="phone" />
          <WarehouseFormInput inputValue="Email" inputName="email" />
        </section>
        <section className="warehouse-form__buttons">
          <button className="warehouse-form__button">Cancel</button>
          <input
            className="warehouse-form__button--blue"
            type="submit"
            value="+Add Warehouse"
          />
        </section>
      </form>
    </main>
  )
}

export default AddWarehouse
