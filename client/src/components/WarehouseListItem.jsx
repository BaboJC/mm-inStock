import React,{ useState } from 'react'
import chevron from "../assets/Icons/chevron_right-24px.svg"
import trash from "../assets/Icons/delete_outline-24px.svg"
import pencil from "../assets/Icons/edit-24px.svg"
import { Link } from "react-router-dom"
import WarehouseDeleteModal from "./WarehouseDeleteModal"


function WarehouseListItem(props) {
  const[isOpen, setIsOpen] = useState(false)


  

  return (
    <li className="list__item">
      <div className="list__info-container">
        <div className="list__section">
          <h4 className="list__label">warehouse</h4>
          <div className="list__center-container">
            <h3 className="list__info list__info--link">{props.name} </h3>
            <Link className="list__link" to={`/warehouses/${props.id}`}>
              <img className="list__chevron" src={chevron} alt="chevron" />
            </Link>
          </div>
        </div>
        <div className="list__section">
          <h4 className="list__label">address</h4>
          <p className="list__info">
            {props.address}, {props.city}, {props.country}
          </p>
        </div>
        <div className="list__section">
          <h4 className="list__label">contact name</h4>
          <p className="list__info">{props.contact.name}</p>
        </div>
        <div className="list__section">
          <h4 className="list__label">contact information</h4>
          <p className="list__info">{props.contact.phone}</p>
          <p className="list__info">{props.contact.email}</p>
        </div>
      </div>
      <div>
      <WarehouseDeleteModal open={isOpen} onClose={()=>setIsOpen(false)}deleteWarehouse={props.deleteWarehouse} id={props.id}>
      <p className="list__modal"> Are you sure you want to delete {props.name} warehouse? </p>
      
      </WarehouseDeleteModal>
      </div>
      <div className="warehouse-item__actions">
          <Link onClick={()=>setIsOpen(true)}>Open Modal
          <img
            className="warehouse-item__icon"
            src={trash}
            alt="delete button"
          />
          </Link>


        <Link to={`/warehouses/${props.id}/edit`}>
          <img className="list__icon" src={pencil} alt="edit button" />
        </Link>
      </div>
    </li>
   
  )
}

export default WarehouseListItem;
