import React from "react"
import Axios from "axios"
import arrowback from "../assets/Icons/arrow_back-24px.svg"
import TextFormInput from "../components/TextFormInput"
import { Link } from "react-router-dom"

class EditWarehouse extends React.Component {
  state = {
    warehouseInfo: {},
    
    editedWarehouse:{}
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

  patchWarehouse(id){
    Axios.patch(`http://localhost:5000/warehouses/${id}`)
    .then((response)=>{
      this.setState({
        editedWarehouse:response.data,
        
      })
      .catch((error) => {
        console.log(error)
    })
  })
}
  
  componentDidMount(){
    const { id } = this.props.match.params
    this.getWarehouseDetails(id)
    this.patchWarehouse(id)
   
  }
  
  

  handleInputChange =(event)=> {
    console.dir(event.target)
    if(event.target.name==='name'){
      const updateWarehouse={...this.state.warehouseInfo}
      updateWarehouse.name=event.target.value
      this.setState({warehouseInfo:updateWarehouse})
    }
    if(event.target.country==='country'){
      const updateWarehouse={...this.state.warehouseInfo}
      updateWarehouse.country=event.target.value
      this.setState({warehouseInfo:updateWarehouse})
    }
    console.log(this.state)
    // this.setState({ value: event.target.value })
  }

  render() {
    const { name, address, city, country, contact } = this.state.warehouseInfo
    // const{editedName, editedAddress, editedCity, editedCountry, editedContact}  = this.state.editedWarehouse

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

        <form className="form">
          <section className="form__section">
            <h2 className="form__h2">Warehouse Details</h2>
            <TextFormInput
              inputValue="Warehouse Name"
              inputName="name"
              fill={name}
              handleInputChange={this.handleInputChange}
              
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
              handleInputChange={this.handleInputChange}
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
