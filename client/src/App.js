import React from "react"
import "./style/App.css"
import WarehousePage from "./components/WarehousePage"

class App extends React.Component {
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
    inventories: [],
  }

  render() {
    return (
      <>
        <WarehousePage warehouseList={this.state.warehouses} />
      </>
    )
  }
}

export default App
