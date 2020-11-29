import logo from "../assets/Logo/InStock-Logo.svg"
import { NavLink } from "react-router-dom"

function Nav() {
  return (
    <nav className="nav">
      <div className="nav__center-container">
        <img className="nav__logo" src={logo} alt="InStock Logo" />
        <ul className="nav__navigation">
          <li className="nav__item">
            <NavLink to="/warehouses" activeClassName="nav__active">
              Warehouses
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/inventories" activeClassName="nav__active">
              Inventory
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav
