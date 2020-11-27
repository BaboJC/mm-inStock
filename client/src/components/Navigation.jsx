import { Link } from "react-router-dom"

function Navigation() {
  return (
    <ul className="navigation">
      <Link to="/">
        <li className="navigation__item">Warehouses</li>
      </Link>
      <Link to="/inventories">
        <li className="navigation__item">Inventory</li>
      </Link>
    </ul>
  )
}

export default Navigation
