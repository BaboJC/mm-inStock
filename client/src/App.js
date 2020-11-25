import React from "react"
import "./style/App.css"

class App extends React.Component {
  state = {
    warehouses: [],
    inventories: [],
  }

  render() {
    return (
      <div>
        <h1>InStock</h1>
      </div>
    )
  }
}

export default App
