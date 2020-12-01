import TextFormInput from "./TextFormInput"

function InventoryFormAdd(props) {
  return (
    <form className="inventory-form">
      <section className="edit-inventory__item-details">
        <h2 className="form-h2">Item Details</h2>
        <TextFormInput inputValue="Item Name" input="name" />
        <label className="warehouse-form__label">
          Description
          <textarea className="inventory-form__description" />
        </label>
        <label className="warehouse-form__label">
          Category
          <select className="form-section">
            <option className="inventory-form__option">Electronics</option>
            <option className="inventory-form__option">Gear</option>
            <option className="inventory-form__option">Apparel</option>
            <option className="inventory-form__option">Accessories</option>
            <option className="inventory-form__option">Health</option>
          </select>
        </label>
      </section>
      <section className="form__section">
        <h2 className="form__h2">Item Availability</h2>
        <div className="form__radio">
          <input type="radio" name="status" value="instock" />
          <label htmlFor="instock">In Stock</label>
          <input type="radio" name="status" value="nostock" />
          <label htmlFor="nostock">Out of stock</label>
        </div>
        <label className="warehouse-from__label">
          Quantity
          <input className="warehouse-form__input" name="quantity" value="0" />
        </label>
        <label className="warehouse-form__label">
          Warehouse
          <select className="form-section">
            <option className="inventory-form__option">Manhattan</option>
            <option className="inventory-form__option">King West</option>
            <option className="inventory-form__option">Granville</option>
            <option className="inventory-form__option">San Fran</option>
            <option className="inventory-form__option">Santa Monica</option>
            <option className="inventory-form__option">Seattle</option>
            <option className="inventory-form__option">Montreal</option>
            <option className="inventory-form__option">Boston</option>
          </select>
        </label>
        <section className="warehouse-form__buttons">
          <button className="warehouse-form__button">Cancel</button>
          <input
            className="warehouse-form__button--blue"
            type="submit"
            value="+Add Item"
          />
        </section>
      </section>
    </form>
  )
}

export default InventoryFormAdd
