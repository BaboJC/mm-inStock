import chevron from "../assets/Icons/chevron_right-24px.svg"
import trash from "../assets/Icons/delete_outline-24px.svg"
import pencil from "../assets/Icons/edit-24px.svg"
import { Link } from "react-router-dom"

function InventoryListItem(props) {
  return (
    <li className="list__item">
      <div className="list__info-container">
        <div className="list__section">
          <h4 className="list__label">inventory item</h4>
          <div className="list__center-container">
            <h3 className="list__info list__info--link">{props.item}</h3>
            <Link className="list__link" to={`/inventories/${props.id}`}>
              <img className="list__chevron" src={chevron} alt="chevron" />
            </Link>
          </div>
        </div>
        <div className="list__section">
          <h4 className="list__label">category</h4>
          <p className="list__info">{props.item}</p>
        </div>
        <div className="list__section">
          <h4 className="list__label">status</h4>
          <p className="list__info">{props.status}</p>
        </div>
        <div className="list__section">
          <h4 className="list__label">qty</h4>
          <p className="list__info">{props.quantity}</p>
        </div>
      </div>
      <div className="list__actions">
        <img className="list__icon" src={trash} alt="delete button" />
        <Link className="list__link" to={`/inventories/${props.id}/edit`}>
          <img className="list__icon" src={pencil} alt="edit button" />
        </Link>
      </div>
    </li>
  )
}

export default InventoryListItem
