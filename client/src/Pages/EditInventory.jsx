/*import React from "react"
import arrowback from "../assets/Icons/arrow_back-24px.svg"
import TextFormInput from "../components/TextFormInput"
import { Link } from "react-router-dom"

class EditInventory extends React.Component {
  state = {
    inventoryItem: {},
  }

  render() {
    return (
      <main className="main">
        <h1 className="edit-warehouse__title">
          <Link to="/inventories">
            <img className="return-button" src={arrowback} alt="back button" />
            Edit Inventory Item
          </Link>
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
          </section>
          <section className="warehouse-form__buttons">
            <button className="warehouse-form__button">Cancel</button>
            <input
              className="warehouse-form__button--blue"
              type="submit"
              value="Save"
            />
          </section>
        </form>
      </main>
    )
  }
}

export default EditInventory*/
import React from "react";
import Axios from "axios";
import arrowback from "../assets/Icons/arrow_back-24px.svg";
import TextFormInput from "../components/TextFormInput"
import { Link } from "react-router-dom";
const { v4: uuid } = require('uuid');

class EditInventory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: "",
      data: null
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });

    console.log(`FUCK THIS SHIT`);
  }

  handleSubmit(event) {
    console.log(`In function, and data is`);
    event.preventDefault();

    /*Axios
    .get(`http://localhost:5000/inventories/${this.props.match.params}`)
    .then(response => {
      console.log(response.data);
    })*/
  }

  /*putItemDetails = (id) => {
    Axios
      .put(`http://localhost:5000/inventories/${id}`)
      .then(response => {
        // console.log(response.data);

      })
  }*/

  /*componentDidUpdate(prevProps, prevState) {
    const { params } = this.props.match;
    if (params.id && prevState.id !== params.id) {
      this.putItemDetails(params.id);
    }
  }*/

  getItemDetails = (id) => {
    this.setState({loading: true});

    return Axios
      .get(`http://localhost:5000/inventories/${id}`)
        .then(response => {
          this.setState({
            data: response.data,
            loading: false,
            error: false
          });
        })
        .catch(error => {
          console.error(`Error ${error}`);
          this.setState({
            error: `${error}`,
            loading: false
          });
        });
  };

  // Display original values at mount
  componentDidMount() {
    const { id } = this.props.match.params;
    this.getItemDetails(id);
  }


  putInventoryItem(id) {

  }

  // Display original values at mount
  componentDidUpdate() {
    const { id } = this.props.match.params;
    this.putInventoryItem(id);
    // this.getItemDetails(id);
  }

  render() {
    const { loading, error, data } = this.state;
    if (loading) {
      return <p>Loading ...</p>;
    }
    if (error) {
      return (
        <p>There was an error loading the data.{" "}
          <button onClick={this.getItemDetails}>Try again</button>
        </p>
      );
    }
    
    return (
      <main className="main">
        <h1 className="edit-warehouse__title">
          <Link to="/inventories">
            <img className="return-button" src={arrowback} alt="back button" />
            Edit Inventory Item
          </Link>
        </h1>
        <form className="inventory-form" onSubmit={this.handleSubmit}>
          <section className="edit-inventory__item-details">
            <h2 className="form-h2">Item Details</h2>
            <TextFormInput inputValue="Item Name" input="name" onChange={this.handleInputChange} fill={data.itemName} />
            <label className="warehouse-form__label">
              Description
              <textarea className="inventory-form__description" onChange={this.handleInputChange} defaultValue={data.description} />
            </label>
            <label className="warehouse-form__label">
              Category
              <select className="form-section" onChange={this.handleInputChange} defaultValue={data.category}>
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
              <input type="radio" name="status" value="In Stock" onChange={this.handleInputChange} />
              <label htmlFor="instock">In Stock</label>
              <input type="radio" name="status" value="Out of Stock" onChange={this.handleInputChange} />
              <label htmlFor="nostock">Out of stock</label>
            </div>
            <label className="warehouse-form__label">
              Warehouse
              <select className="form-section" onChange={this.handleInputChange} defaultValue={data.warehouseName}>
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
          </section>
          <section className="inventory-form__buttons">
          <input
              className="inventory-form__button--blue"
              type="reset"
              value="Cancel"
            />
            <input
              className="inventory-form__button--blue"
              type="submit"
              value="Save"
            />
          </section>
        </form>
      </main>

      /*
      <label htmlFor="category">
            Essay: 
            <input type="text" name="category" id="category" defaultValue={data.category} onChange={this.handleInputChange}></input>
          </label>
          <input type="submit" value="Save"/>
      {data.id}
      {data.warehouseID}
      {data.warehouseName}
      {data.itemName}
      {data.description}
      {data.category}
      {data.status}
      {data.quantity}
      */
    )
  }
}

export default EditInventory;


/*
import Axios from "axios"
import arrowback from "../assets/Icons/arrow_back-24px.svg"
import TextFormInput from "../components/TextFormInput"

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
          <TextFormInput inputValue="Warehouse Name" inputName="name" />
          <TextFormInput inputValue="Street Address" inputName="street" />
          <TextFormInput inputValue="City" inputName="city" />
          <TextFormInput inputValue="Country" inputName="country" />
        </section>
        <section className="warehouse-form__section">
          <h2 className="warehouse-form__title">Contact Details</h2>
          <TextFormInput inputValue="Contact Name" inputName="contact" />
          <TextFormInput inputValue="Position" inputName="position" />
          <TextFormInput inputValue="Phone Number" inputName="phone" />
          <TextFormInput inputValue="Email" inputName="email" />
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

*/