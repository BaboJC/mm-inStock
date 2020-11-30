import React from "react";
import Axios from "axios";
import arrowback from "../assets/Icons/arrow_back-24px.svg";
import TextFormInput from "../components/TextFormInput"
import { Link } from "react-router-dom";

class ItemEditForm extends React.Component {
  state = {
    item: {
      id: '',
      warehouseID: '',
      warehouseName: '',
      itemName: '',
      description: '',
      category: '',
      status: '',
      quantity: ''
    }
  }

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

  handleChange = e => {
    e.persist();

    this.setState(prevState => ({
      item: { ...prevState.item, [e.target.itemName]: e.target.value}
    }))
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
    console.log(data);

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          // value={this.state.data.itemName}
          onChange={this.handleChange}
        />
        <button onClick={this.editItem}>Edit item</button>
      </form>
      /*
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
            <TextFormInput inputValue="Item Name" inputName="itemName" onChange={this.handleInputChange} fill={data.itemName} />
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
            <button onClick=this.editItem}>Edit item</button>
          </section>
        </form>
      </main>*/
    )
  }
}

export default ItemEditForm;