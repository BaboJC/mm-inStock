import arrowback from "../assets/Icons/arrow_back-24px.svg"
import WarehouseFormInput from "./WarehouseFormInput"

function AddWarehouse() {
  return (
    <main className="edit-warehouse">
      <h1 className="edit-warehouse__title">
        <img className="return-button" src={arrowback} alt="back button" />
        Add New Warehouse
      </h1>
      <form className="warehouse-form">
        <section className="warehouse-form__section">
          <h2 className="warehouse-form__title">Warehouse Details</h2>
          <WarehouseFormInput input="Warehouse Name" />
          <WarehouseFormInput input="Street Address" />
          <WarehouseFormInput input="City" />
          <WarehouseFormInput input="Country" />
        </section>
        <section className="warehouse-form__section">
          <h2 className="warehouse-form__title">Contact Details</h2>
          <WarehouseFormInput input="Contact Name" />
          <WarehouseFormInput input="Position" />
          <WarehouseFormInput input="Phone Number" />
          <WarehouseFormInput input="Email" />
        </section>
        <section className="warehouse-form__buttons">
          <button className="warehouse-form__button">Cancel</button>
          <button className="warehouse-form__button--blue">
            +Add Warehouse
          </button>
        </section>
      </form>
    </main>
  )
}

export default AddWarehouse
