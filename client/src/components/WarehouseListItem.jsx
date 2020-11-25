import chevron from "../assets/Icons/chevron_right-24px.svg"
import trash from "../assets/Icons/delete_outline-24px.svg"
import pencil from "../assets/Icons/edit-24px.svg"

function WarehouseListItem(props) {
  return (
    <li className="warehouse-item" key={props.id}>
      <div className="warehouse-item__section">
        <h4 className="warehouse-item__label">warehouse</h4>
        <h3 className="warehouse-item__info--link">
          {props.name}
          <img
            className="warehouse-item__chevron"
            src={chevron}
            alt="chevron"
          />
        </h3>
      </div>
      <div className="warehouse-item__section">
        <h4 className="warehouse-item__label">address</h4>
        <p className="warehouse-item__info">
          {props.address}, {props.city}, {props.country}
        </p>
      </div>
      <div className="warehouse-item__section">
        <h4 className="warehouse-item__label">contact name</h4>
        <p className="warehouse-item__info">{props.contact.name}</p>
      </div>
      <div className="warehouse-item__section">
        <h4 className="warehouse-item__label">contact information</h4>
        <p className="warehouse-item__info">{props.contact.phone}</p>
        <p className="warehouse-item__info">{props.contact.email}</p>
      </div>
      <div className="warehouse-item__actions">
        <img className="warehouse-item__icon" src={trash} alt="delete button" />
        <img className="warehouse-item__icon" src={pencil} alt="edit button" />
      </div>
    </li>
  )
}

export default WarehouseListItem
