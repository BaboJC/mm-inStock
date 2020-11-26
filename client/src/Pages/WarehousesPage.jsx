import React from "react"
import WarehouseListItem from "../components/WarehouseListItem"

class WarehousePage extends React.Component {
  state = {
    warehouses: [
      {
        id: "2922c286-16cd-4d43-ab98-c79f698aeab0",
        name: "Manhattan",
        address: "503 Broadway",
        city: "New York",
        country: "USA",
        contact: {
          name: "Parmin Aujla",
          position: "Warehouse Manager",
          phone: "+1 (646) 123-1234",
          email: "paujla@instock.com",
        },
      },
      {
        id: "5bf7bd6c-2b16-4129-bddc-9d37ff8539e9",
        name: "King West",
        address: "469 King Street West",
        city: "Toronto",
        country: "CAN",
        contact: {
          name: "Greame Lyon",
          position: "Warehouse Manager",
          phone: "+1 (646) 123-1234",
          email: "glyon@instock.com",
        },
      },
    ],
  }

  render() {
    return (
      <main className="warehouse">
        <div className="warehouse__top">
          <h1 className="warehouse__title">Warehouses</h1>
          <form className="warehouse__form">
            <input
              className="warehouse__searchbar"
              type="text"
              placeholder="Search..."
            />
          </form>
          <button className="warehouse__add-warehouse">
            + Add New Warehouse
          </button>
        </div>
        <ul className="warehouse__list">
          {this.state.warehouses.map((warehouse) => (
            <WarehouseListItem
              key={warehouse.id}
              name={warehouse.name}
              address={warehouse.address}
              city={warehouse.city}
              country={warehouse.country}
              contact={warehouse.contact}
            />
          ))}
        </ul>
      </main>
    )
  }
}

export default WarehousePage
