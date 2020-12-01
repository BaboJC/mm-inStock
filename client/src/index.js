import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
<<<<<<< HEAD
import Header from "./components/Header"

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <App />
=======
import { BrowserRouter as Router } from "react-router-dom"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
>>>>>>> development
  </React.StrictMode>,
  document.getElementById("root")
)
