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
        <form className="form">
          <section className="form__section">
            <h2 className="form__h2">Item Details</h2>
            <TextFormInput inputValue="Item Name" input="name" />
            <div className="form__container">
              <label className="form__label">
                <h3 className="form__h3">Description</h3>
              </label>
              <textarea
                className="form__description"
                placeholder="Please enter a brief description"
              />
            </div>
            <div className="form__container">
              <label className="form__label">
                <h3 className="form__h3">Category</h3>
              </label>
              <select className="form__input form__input--select">
                <option className="form__option" value="" selected="selected">
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
            <div className="form__radio">
              <input type="radio" name="status" value="In Stock" onChange={this.handleInputChange} />
              <label htmlFor="instock">In Stock</label>
              <input type="radio" name="status" value="Out of Stock" onChange={this.handleInputChange} />
              <label htmlFor="nostock">Out of stock</label>
            </div>
            <label className="warehouse-form__label">
              Warehouse
              <select className="form-section">
                <option className="form__option">Manhattan</option>
                <option className="form__option">King West</option>
                <option className="form__option">Granville</option>
                <option className="form__option">San Fran</option>
                <option className="form__option">Santa Monica</option>
                <option className="form__option">Seattle</option>
                <option className="form__option">Montreal</option>
                <option className="form__option">Boston</option>
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
      </div>
    )
  }
}

export default ItemEditForm;