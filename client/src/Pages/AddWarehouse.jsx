import Axios from "axios"
import arrowback from "../assets/Icons/arrow_back-24px.svg"
import TextFormInput from "../components/TextFormInput"
import { Link } from "react-router-dom"

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

    console.log(contact)

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

      <form className="form" onSubmit={addNewWarehouse}>
        <section className="form__section">
          <h2 className="form__h2">Warehouse Details</h2>
          <TextFormInput inputValue="Warehouse Name" inputName="name" />
          <TextFormInput inputValue="Street Address" inputName="street" />
          <TextFormInput inputValue="City" inputName="city" />
          <TextFormInput inputValue="Country" inputName="country" />
        </section>
        <section className="form__section">
          <h2 className="form__title">Contact Details</h2>
          <TextFormInput inputValue="Contact Name" inputName="contact" />
          <TextFormInput inputValue="Position" inputName="position" />
          <TextFormInput inputValue="Phone Number" inputName="phone" />
          <TextFormInput inputValue="Email" inputName="email" />
        </section>
        <section className="form__buttons">
          <button className="form__button">Cancel</button>
          <input
            className="form__button form__button--blue"
            type="submit"
            value="+Add Warehouse"
          />
        </section>
      </form>
    </div>
  )
}

export default AddWarehouse
