import React from "react" //for opening and closing of modal
import WarehouseListItem from "../components/WarehouseListItem"
// import WarehouseDeleteButton from "../components/WarehouseDeleteButton"
import axios from "axios"
import { Link } from "react-router-dom"


class WarehousePage extends React.Component {

  state = {
    warehouses: [],
  }

  getWarehouseList() {
    axios
      .get("http://localhost:5000/warehouses")
      .then((response) => {
        this.setState({
          warehouses: response.data,
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }
   deleteWarehouse = (id)=>{
     alert('Warehouse Deleted')
     axios.delete(`http://localhost:5000/warehouses/${id}`).then((response) =>{
       console.log(response)
       this.setState({warehouses:response.data})
       })
       .catch((error) => {
        console.log(error)
      })
  }
  

  componentDidMount() {
    this.getWarehouseList()
   
  }
  
  render() {
     
    return (
      <div className="card-look">
        <div className="title">
          <h1 className="title__h1">Warehouses</h1>
          <form className="search-form">
            <input
              className="search-form__searchbar"
              type="text"
              placeholder="Search..."
            />
          </form>
          <Link to="/warehouses/add">
            <button className="title__add-button">+ Add New Warehouse</button>
          </Link>
        </div>
        <ul className="list">
          {this.state.warehouses.map((warehouse) => (
            <>
              <WarehouseListItem
                key={warehouse.id}
                id={warehouse.id}
                name={warehouse.name}
                address={warehouse.address}
                city={warehouse.city}
                country={warehouse.country}
                contact={warehouse.contact}
                deleteWarehouse={this.deleteWarehouse}
              />
              <div className="hidden">
                
              {/* <WarehouseDeleteButton deleteWarehouse={this.deleteWarehouse} idProp={warehouse.id} /> */}
              
              {/* <WarehouseDeleteButton>
               <button> 
                This works
                {<img className="warehouse-item__icon"  onClick={()=>{this.deleteWarehouse(warehouse.id)}} alt="delete button" />}
            </button> 
            </WarehouseDeleteButton> */}
              
              </div>
            </>
            
          ))}
        </ul>
  
       
      </div>
    )
  }
}

export default WarehousePage
