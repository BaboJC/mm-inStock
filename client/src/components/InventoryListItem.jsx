import chevron from "../assets/Icons/chevron_right-24px.svg"
import trash from "../assets/Icons/delete_outline-24px.svg"
import pencil from "../assets/Icons/edit-24px.svg"
import { Link } from "react-router-dom"

function InventoryListItem(props) {
  return (
    <li className="warehouse-item">
      <div className="warehouse-item__section">
        <h4 className="warehouse-item__label">inventory item</h4>
        <h3 className="warehouse-item__info--link">{props.item}</h3>
        <Link to={`/inventories/${props.id}`}>
          <img
            className="warehouse-item__chevron"
            src={chevron}
            alt="chevron"
          />
        </Link>
      </div>
      <div className="warehouse-item__section">
        <h4 className="warehouse-item__label">category</h4>
        <p className="warehouse-item__info">{props.item}</p>
      </div>
      <div className="warehouse-item__section">
        <h4 className="warehouse-item__label">status</h4>
        <p className="warehouse-item__info">{props.status}</p>
      </div>
      <div className="warehouse-item__section">
        <h4 className="warehouse-item__label">qty</h4>
        <p className="warehouse-item__info">{props.quantity}</p>
      </div>
      <div className="warehouse-item__actions">
        <img className="warehouse-item__icon" src={trash} alt="delete button" />
        <Link to={`/inventories/${props.id}/edit`}>
          <img
            className="warehouse-item__icon"
            src={pencil}
            alt="edit button"
          />
        </Link>
      </div>
    </li>
  )
}

export default InventoryListItem
