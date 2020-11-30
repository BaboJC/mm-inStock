import arrowback from "../assets/Icons/arrow_back-24px.svg"
import TextFormInput from "../components/TextFormInput"
import { Link } from "react-router-dom"
import Axios from "axios"

function AddInventory() {
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
    <main className="main">
      <h1 className="edit-warehouse__title">
        <Link to="/inventories">
          <img className="return-button" src={arrowback} alt="back button" />
        </Link>
        Add New Inventory Item
      </h1>
      <form className="inventory-form">
        <section className="edit-inventory__item-details">
          <h2 className="form-h2">Item Details</h2>
          <TextFormInput inputValue="Item Name" input="name" />
          <label className="warehouse-form__label">
            Description
            <textarea className="inventory-form__description" />
          </label>
          <label className="warehouse-form__label">
            Category
            <select className="form-section">
              <option className="inventory-form__option">Electronics</option>
              <option className="inventory-form__option">Gear</option>
              <option className="inventory-form__option">Apparel</option>
              <option className="inventory-form__option">Accessories</option>
              <option className="inventory-form__option">Health</option>
            </select>
          </label>
        </section>
        <section className="form__section">
          <h2 className="form__h2">Item Availability</h2>
          <div className="form__radio">
            <input type="radio" name="status" value="instock" />
            <label htmlFor="instock">In Stock</label>
            <input type="radio" name="status" value="nostock" />
            <label htmlFor="nostock">Out of stock</label>
          </div>
          <label className="warehouse-from__label">
            Quantity
            <input
              className="warehouse-form__input"
              name="quantity"
              value="0"
            />
          </label>
          <label className="warehouse-form__label">
            Warehouse
            <select className="form-section">
              <option className="inventory-form__option">Manhattan</option>
              <option className="inventory-form__option">King West</option>
              <option className="inventory-form__option">Granville</option>
              <option className="inventory-form__option">San Fran</option>
              <option className="inventory-form__option">Santa Monica</option>
              <option className="inventory-form__option">Seattle</option>
              <option className="inventory-form__option">Montreal</option>
              <option className="inventory-form__option">Boston</option>
            </select>
          </label>
          <section className="warehouse-form__buttons">
            <button className="warehouse-form__button">Cancel</button>
            <input
              className="warehouse-form__button--blue"
              type="submit"
              value="+Add Item"
            />
          </section>
        </section>
      </form>
    </main>
  )
}

export default AddInventory
