import WarehouseListItem from "./WarehouseListItem"

function WarehousePage(props) {
  return (
    <main className="warehouse">
      <div className="warehouse__top">
        <h1 className="warehouse__title">Warehouses</h1>
        <form className="warehouse__form">
          <input
            className="warehouse__searchbar"
            type="text"
            placeholder="Search..."
          />
        </form>
        <button className="warehouse__add-warehouse">
          + Add New Warehouse
        </button>
      </div>
      <ul className="warehouse__list">
        {props.warehouseList.map((warehouse) => (
          <WarehouseListItem
            key={warehouse.id}
            name={warehouse.name}
            address={warehouse.address}
            city={warehouse.city}
            country={warehouse.country}
            contact={warehouse.contact}
          />
        ))}
      </ul>
    </main>
  )
}

export default WarehousePage
