import React from "react"
import WarehouseListItem from "../components/WarehouseListItem"
import WarehouseDeleteButton from "../components/WarehouseDeleteButton"
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
 
  deleteWarehouse = (id) => { 
   alert(id);
  axios.delete(`http://localhost:5000/warehouses/${id}`)
  .then(response => {
  if(response.data !=null){
    alert("Deleted successfully");
    this.getWarehouseList()
    // this.setState({
    //   filteredWarehouse: this.state.warehouses.filter((warehouse)=> warehouse.id===id)
    // })
  }
});
 };

  componentDidMount() {
    this.getWarehouseList()
  }

  render() {
    return (
      <main className="main">
features_warehouseAPI/Hargul
        <div className="warehouse">
          <h1 className="warehouse__title">Warehouses</h1>
          <form className="warehouse__form">
            <input
              className="warehouse__searchbar"
              type="text"
              placeholder="Search..."
            />
          </form>
          {/* <button className="warehouse__delete-warehouse" onClick={this.deleteWarehouse.bind(this.id)}>Delete1</button> */}
          <Link to="/add">
            <button className="warehouse__add-warehouse">
              + Add New Warehouse
            </button>
          </Link>
        </div>
        <ul className="warehouse__list">
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
            />
            <WarehouseDeleteButton
            deleteWarehouse={this.deleteWarehouse}/>
            </>

          ))}
        </ul>

      </main>
    )
  }
}

export default WarehousePage
