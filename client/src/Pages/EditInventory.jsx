import React from "react"
import arrowback from "../assets/Icons/arrow_back-24px.svg"
import TextFormInput from "../components/TextFormInput"
import { Link } from "react-router-dom"
import Axios from "axios"

class EditInventory extends React.Component {
  state = {
    inventoryInfo: {},
  }

  getInventoryDetails(id) {
    Axios.get(`http://localhost:5000/inventories/${id}`)
      .then((response) => {
        this.setState({
          inventoryInfo: response.data,
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  updateInventory = (event) => {
    event.preventDefault()
    const form = event.target
    const warehouseName = form.warehouseName.value
    const itemName = form.name.value
    const description = form.description.value
    const category = form.category.value
    const status = form.status.value

    const updatedInventory = {
      id: this.state.inventoryInfo.id,
      warehouseID: this.state.inventoryInfo.warehouseID,
      warehouseName: warehouseName,
      itemName: itemName,
      description: description,
      category: category,
      status: status,
      quantity: this.state.inventoryInfo.quantity,
    }

    Axios.put(
      `http://localhost:5000/inventories/${this.state.inventoryInfo.id}`,
      updatedInventory
    ).then(alert("changes have been made"))
  }

  componentDidMount() {
    const { id } = this.props.match.params
    this.getInventoryDetails(id)
  }

  render() {
    const {
      itemName,
      description,
      category,
      status,
      warehouseName,
    } = this.state.inventoryInfo
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
          <h1 className="title__h1">Edit Inventory Item</h1>
        </div>
        <form className="form" onSubmit={this.updateInventory}>
          <section className="form__section">
            <h2 className="form__h2">Item Details</h2>
            <TextFormInput
              inputValue="Item Name"
              inputName="name"
              fill={itemName}
            />
            <div className="form__container">
              <label className="form__label" htmlFor="description">
                <h3 className="form__h3">Description</h3>
              </label>
              <textarea
                className="form__description"
                name="description"
                placeholder="Please enter a brief description"
                defaultValue={description}
              />
            </div>
            <div className="form__container">
              <label className="form__label" htmlFor="category">
                <h3 className="form__h3">Category</h3>
              </label>
              {/* We are aware of the warning error but do not have time to explore options of fixing this issue. */}
              <select
                className="form__input form__input--select"
                name="category"
              >
                <option className="form__option" value="">
                  Please select
                </option>
                <option
                  className="form__option"
                  value="Electronics"
                  selected={category === "Electronics" ? "selected" : null}
                >
                  Electronics
                </option>
                <option
                  className="form__option"
                  value="Gear"
                  selected={category === "Gear" ? "selected" : null}
                >
                  Gear
                </option>
                <option
                  className="form__option"
                  value="Apparel"
                  selected={category === "Apparel" ? "selected" : null}
                >
                  Apparel
                </option>
                <option
                  className="form__option"
                  value="Accessories"
                  selected={category === "Accessories" ? "selected" : null}
                >
                  Accessories
                </option>
                <option
                  className="form__option"
                  value="Health"
                  selected={category === "Health" ? "selected" : null}
                >
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
                <input
                  type="radio"
                  name="status"
                  value="In Stock"
                  defaultChecked={status === "In Stock" ? "checked" : null}
                />
                <label className="form__status-option" htmlFor="status">
                  In Stock
                </label>
                <input
                  type="radio"
                  name="status"
                  value="Out of Stock"
                  defaultChecked={status === "Out of Stock" ? "checked" : null}
                />
                <label className="form__status-option" htmlFor="status">
                  Out of stock
                </label>
              </div>
            </div>
            <div className="form__container">
              <label className="form__label" htmlFor="warehouse">
                <h3 className="form__h3">Warehouse</h3>
              </label>
              <select
                className="form__input form__input--select"
                name="warehouseName"
              >
                <option
                  className="form__option"
                  value="Manhattan"
                  selected={warehouseName === "Manhattan" ? "selected" : null}
                >
                  Manhattan
                </option>
                <option
                  className="form__option"
                  value="King West"
                  selected={warehouseName === "King West" ? "selected" : null}
                >
                  King West
                </option>
                <option
                  className="form__option"
                  value="Granville"
                  selected={warehouseName === "Granville" ? "selected" : null}
                >
                  Granville
                </option>
                <option
                  className="form__option"
                  value="San Fran"
                  selected={warehouseName === "San Fran" ? "selected" : null}
                >
                  San Fran
                </option>
                <option
                  className="form__option"
                  value="Santa Monica"
                  selected={
                    warehouseName === "Santa Monica" ? "selected" : null
                  }
                >
                  Santa Monica
                </option>
                <option
                  className="form__option"
                  value="Seattle"
                  selected={warehouseName === "Seattle" ? "selected" : null}
                >
                  Seattle
                </option>
                <option
                  className="form__option"
                  value="Montreal"
                  selected={warehouseName === "Montreal" ? "selected" : null}
                >
                  Montreal
                </option>
                <option
                  className="form__option"
                  value="Boston"
                  selected={warehouseName === "Boston" ? "selected" : null}
                >
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
              value="Save"
            />
          </section>
        </form>
      </div>
    )
  }
}

export default EditInventory
