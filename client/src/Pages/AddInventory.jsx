import Axios from "axios"
import arrowback from "../assets/Icons/arrow_back-24px.svg"
import TextFormInput from "../components/TextFormInput"
import { Link } from "react-router-dom"

function AddInventory() {
  const addInventoryItem = (event) => {
    event.preventDefault()
    const form = event.target
    // const warehouseID = form.warehouseID.value
    const warehouseName = form.warehouseName.value
    const itemName = form.itemName.value
    const description = form.description.value
    const category = form.category.value
    const status = form.status.value
    const quantity = form.quantity.value

    const newItem = {
      // warehouseID: warehouseID,
      warehouseName: warehouseName,
      itemName: itemName,
      description: description,
      category: category,
      status: status,
      quantity: quantity,
    }

    Axios.post("http://localhost:5000/inventories/add", newItem)
      .then(form.reset(), alert("New Item Added"))
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div className="card-look">
      <div className="alt-title">
        <Link to="/inventories">
          <img
            className="alt-title__return"
            src={arrowback}
            alt="back button"
          />
        </Link>
        <h1 className="title__h1">Add New Inventory Item</h1>
      </div>

      <form className="form" onSubmit={addInventoryItem}>
        <section className="form__section">
          <h2 className="form__h2">Item Details</h2>
          <TextFormInput
            inputValue="Item Name"
            input="name"
            inputName="itemName"
          />
          <div className="form__container">
            <label className="form__label" htmlFor="description">
              <h3 className="form__h3">Description</h3>
            </label>
            <textarea
              className="form__description"
              name="description"
              placeholder="Please enter a brief description"
            />
          </div>
          <div className="form__container">
            <label className="form__label" htmlFor="category">
              <h3 className="form__h3">Category</h3>
            </label>
            <select
              className="form__input form__input--select"
              name="category"
              defaultValue="Please select"
            >
              <option className="form__option" value="">
                Please select
              </option>
              <option className="form__option" value="electronics">
                Electronics
              </option>
              <option className="form__option" value="gear">
                Gear
              </option>
              <option className="form__option" value="apparel">
                Apparel
              </option>
              <option className="form__option" value="accessories">
                Accessories
              </option>
              <option className="form__option" value="health">
                Health
              </option>
            </select>
          </div>
        </section>
        <section className="form__section">
          <h2 className="form__h2">Item Availability</h2>
          <div className="form__container">
            <h3 className="form__h3">Status</h3>
            <div className="form__status">
              <input type="radio" name="status" value="instock" />
              <label className="form__status-option" htmlFor="status">
                In Stock
              </label>
              <input type="radio" name="status" value="nostock" />
              <label className="form__status-option" htmlFor="status">
                Out of stock
              </label>
            </div>
          </div>
          <div className="form__container">
            <label className="form__label" htmlFor="quantity">
              <h3 className="form__h3">Quantity</h3>
            </label>
            <input className="form__input" name="quantity" defaultValue="0" />
          </div>
          <div className="form__container">
            <label className="form__label" htmlFor="warehouseName">
              <h3 className="form__h3">Warehouse</h3>
            </label>
            <select
              className="form__input form__input--select"
              name="warehouseName"
            >
              <option className="form__option" value="manhattan">
                Manhattan
              </option>
              <option className="form__option" value="king west">
                King West
              </option>
              <option className="form__option" value="granville">
                Granville
              </option>
              <option className="form__option" value="san fran">
                San Fran
              </option>
              <option className="form__option" value="santa monica">
                Santa Monica
              </option>
              <option className="form__option" value="seattle">
                Seattle
              </option>
              <option className="form__option" value="montreal">
                Montreal
              </option>
              <option className="form__option" value="boston">
                Boston
              </option>
            </select>
          </div>
        </section>
        <section className="form__buttons">
          <Link to="/inventories">
            <button className="form__button">Cancel</button>
          </Link>

          <input
            className="form__button form__button--blue"
            type="submit"
            value="+Add Item"
          />
        </section>
      </form>
    </div>
  )
}

export default AddInventory
